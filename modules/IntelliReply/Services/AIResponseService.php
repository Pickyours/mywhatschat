<?php

namespace Modules\IntelliReply\Services;

use App\Helpers\CustomHelper;
use App\Models\Addon;
use App\Models\Chat;
use App\Models\ChatMedia;
use App\Models\ChatTicketLog;
use App\Models\Contact;
use App\Models\Organization;
use App\Models\Setting;
use App\Services\WhatsappService;
use FFMpeg\FFMpeg;
use FFMpeg\Format\Audio\Mp3;
use Illuminate\Support\Facades\Log;
use Modules\IntelliReply\Models\Document;
use OpenAI;

class AIResponseService
{
    public function handleAIResponse($chat, $receivedMessage)
    {
        // Check organization metadata
        $aimodule = CustomHelper::isModuleEnabled('AI Assistant');
        $organizationId = $chat->organization_id;
        $organizationConfig = Organization::find($organizationId);
        $metadataArray = $organizationConfig->metadata ? json_decode($organizationConfig->metadata, true) : [];
        $is_ai_active = $metadataArray['ai']['active'] ?? false;
        $enable_ai_to_respond_automatically = $metadataArray['ai']['enable_automatic_responses'] ?? false;
        $chat_ticketing = $metadataArray['tickets']['active'] ?? false;
        $contact = Contact::find($chat->contact_id);
        $ai_assistance_enabled = $contact->ai_assistance_enabled;
        $start_words = $metadataArray['ai']['start_keywords'] ?? "";
        $stop_words = $metadataArray['ai']['stop_keywords'] ?? "";
        
        if($aimodule){
            $lastMessage = $this->extractLastMessage($organizationId, $chat->contact_id);
            $receivedMessage = $lastMessage['message'];
            $closestDocument = $this->findClosestDocumentByQuery($organizationId, $receivedMessage);
            
            /*if($closestDocument['success'] === false){
                return 'Sorry but I don\'t have any information about this.';
            } else {*/
                // Retrieve the last 5 messages for the contact
                $messages = Chat::where('contact_id', $chat->contact_id)
                    ->orderBy('created_at', 'desc')
                    ->take(10)
                    ->get();

                // Extract the message body from the metadata column and convert to an array
                $conversationHistory = $messages->map(function ($message) use ($organizationId, $metadataArray) {
                    // Decode the JSON in the metadata column
                    $metadata = json_decode($message->metadata, true);
                    
                    // Check if type is 'text' and return the body if it exists
                    if (isset($metadata['type']) && ($metadata['type'] === 'text' || $metadata['type'] === 'audio')) {
                        $role = ($message->type === 'outbound') ? 'assistant' : 'user'; //outbound => user, inbound => assistant

                        if($metadata['type'] === 'text'){
                            return [
                                "role" => $role,
                                "content" => $metadata['text']['body'] ?? null
                            ];
                        } else if($metadata['type'] === 'audio' && $metadataArray['ai']['allow_audio_response']){
                            $audio = ChatMedia::where('id', $message->media_id)->first();

                            if($role == 'user'){
                              	if($audio->location == 'local'){
                                    $filePath = storage_path("app/{$audio->path}");

                                    if(file_exists($filePath)){
                                        $audioFile = $this->convertToMp3($filePath);
    
                                        return [
                                            "role" => $role,
                                            "content" => [
                                                [
                                                    "type" => "input_audio",
                                                    "input_audio" => [
                                                        "data" => $audioFile['data'],
                                                        "format" => $audioFile['format'],
                                                    ]
                                                ]
                                            ]
                                        ];
                                    }
                                } else if($audio->location == 'amazon'){
                                    $fileUrl = $audio->path;
                                  	$parsedUrl = parse_url($audio->path);
    								$filePath = ltrim($parsedUrl['path'], '/');

                                    if (\Storage::disk('s3')->exists($filePath)) {
                                        $audioFile = $this->convertToMp3($fileUrl);
    
                                        return [
                                            "role" => $role,
                                            "content" => [
                                                [
                                                    "type" => "input_audio",
                                                    "input_audio" => [
                                                        "data" => $audioFile['data'],
                                                        "format" => $audioFile['format'],
                                                    ]
                                                ]
                                            ]
                                        ];
                                    }
                                }
                            } else {
                                //Check if audio name starts with audio_
                                if(isset($audio->name)){
                                    if (str_starts_with($audio->name, 'audio_')) {
                                        return [
                                            'role' => $role,
                                            'audio' => [
                                                'id' => $audio->name,
                                            ],
                                        ];
                                    }
                                }
                            }
                        }
                    }
                    
                    return null;
                })->filter()
                ->toArray();

                $conversationHistory = array_reverse($conversationHistory); // Inverte a ordem para manter a cronologia

                // Build the context by looping through the conversation history and concatenating the messages
                $context = [
                    [
                        "role" => "system", 
                        "content" => "You are a customer support service AI Chatbot. You only provide answers that can be strictly found in context or documentation. If the user asks a question that lacks sufficient information or if it is not covered in the documentation, reply with 'Sorry, I don't have information about this. Could you specify what you’d like more information about?'. Here is the documentation: " . $closestDocument['document']
                    ]
                ]; // Initialize context with a system message

                // Append the user and assistant messages to the context
                foreach ($conversationHistory as $message) {
                    if (!empty($message['content'])) {
                        $context[] = [
                            "role" => $message['role'],
                            "content" => $message['content']
                        ];
                    }
                }

                //\Log::info($context);

                // Check if the received message contains any stop words
                if ($stop_words) {
                    $stopWordsArray = array_map('trim', explode(',', $stop_words));
                    // Loop through each stop word and check if it exists in the received message
                    foreach ($stopWordsArray as $stopWord) {
                        if (stripos($receivedMessage, $stopWord) !== false) {
                            $ai_assistance_enabled = 0;
                            $contact->update(['ai_assistance_enabled' => $ai_assistance_enabled]);
                            return false; // Stop further AI processing
                        }
                    }
                }

                // Check if the received message contains any start words
                if ($start_words) {
                    $startWordsArray = array_map('trim', explode(',', $start_words));
                    // Loop through each stop word and check if it exists in the received message
                    foreach ($startWordsArray as $startWord) {
                        if (stripos($receivedMessage, $startWord) !== false) {
                            $ai_assistance_enabled = 1;
                            $contact->update(['ai_assistance_enabled' => $ai_assistance_enabled]);
                            //return true;
                        }
                    }
                }

                // Verify if the user has enabled automatic AI responses and 
                // ensure that the AI response feature is currently inactive for this user

                if($enable_ai_to_respond_automatically && !$ai_assistance_enabled){
                    if ($chat_ticketing) {
                        // Define the parameters with which the AI should respond if ticketing workflows have been enabled
                        // Retrieve the most recent chat ticket log for the contact
                        $chatTicketLog = ChatTicketLog::where('contact_id', $chat->contact_id)
                            ->where(function($query) {
                                $query->where('description', 'Conversation was opened')
                                    ->orWhere('description', 'Conversation was moved from closed to open');
                            })
                            ->orderBy('id', 'desc')
                            ->first();

                        // Count the number of outbound chats created after the last chat ticket log
                        if ($chatTicketLog) {
                            $outboundChatsCount = Chat::where('contact_id', $chat->contact_id)
                                ->where('created_at', '>', $chatTicketLog->created_at)
                                ->where('type', 'outbound')
                                ->count();
                        } else {
                            // Handle the case where no chat ticket log exists
                            $outboundChatsCount = 0;
                        }

                        // If no outbound chats are found, enable AI assistance for the contact
                        if ($outboundChatsCount == 0) {
                            $ai_assistance_enabled = 1;
                            Contact::where('id', $chat->contact_id)
                                ->update(['ai_assistance_enabled' => $ai_assistance_enabled]);
                        }
                    } else {
                        //Define the parameters with which the AI should respond if ticketing workflows have not been enabled
                        //Check if the user has other previous messages during the last 24 hours
                        $inboundChatsCount = Chat::where('contact_id', $chat->contact_id)
                            ->where('type', 'inbound')
                            ->where('created_at', '>', now()->subDay())
                            ->count();

                        // If no outbound chats are found, enable AI assistance for the contact
                        if ($inboundChatsCount <= 1) {
                            $ai_assistance_enabled = 1;
                            Contact::where('id', $chat->contact_id)
                                ->update(['ai_assistance_enabled' => $ai_assistance_enabled]);
                        }
                    }
                }

                // Check if AI is active and automatic responses are enabled
                if ($is_ai_active && $ai_assistance_enabled) {
                    // Pass the context and received message to the chat method
                    $res = $this->chat($organizationId, $lastMessage['type'], $context); 
            
                    if ($res) {
                        if($lastMessage['type'] == 'text'){
                            $this->initializeWhatsappService($organizationId)->sendMessage($contact->uuid, $res['text']);
                        } else if($lastMessage['type'] == 'audio' && $metadataArray['ai']['allow_audio_response']){
                            $file = $this->saveBase64Audio($res['audio']['data'], $organizationId, $res['audio']['id']);
                            $this->initializeWhatsappService($organizationId)->sendMedia($contact->uuid, 'audio', $res['audio']['id'], $file['filePath'], $file['mediaUrl'], $file['location']);
                        }
                        return true; // Indicates that an AI response was sent
                    }
                }
            //}
        }

        return false; // Indicates that no AI response was sent
    }

    public function chat($organizationId, $type, $context)
    {
        $organizationConfig = Organization::where('id', $organizationId)->first();
        $organizationConfig = $organizationConfig ? json_decode($organizationConfig->metadata, true) : [];

        if($organizationConfig['ai']['model'] != 'gpt-4o-audio-preview'){
            $response = \Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $organizationConfig['ai']['api_key']
            ])->post('https://api.openai.com/v1/chat/completions', [
                'model' => $organizationConfig['ai']['model'],
                'messages' => $context
            ]);
        } else {
            $response = \Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $organizationConfig['ai']['api_key']
            ])->post('https://api.openai.com/v1/chat/completions', [
                'model' => $organizationConfig['ai']['model'],
                "modalities" => ["text", "audio"],
                "audio" => [
                    "voice" => $organizationConfig['ai']['voice'],
                    "format" => "mp3"
                ],
                'messages' => $context
            ]);
        }
        

        $responseArray = $response->json();

        //\Log::info($responseArray);

        // Access the first choice in the response (choices array)
        if (isset($responseArray['choices']) && count($responseArray['choices']) > 0) {
            $audioId = NULL;
            $encodedAudioFile = NULL;

            if(isset($responseArray['choices'][0]['message']['content'])){
                $chatResponse = $responseArray['choices'][0]['message']['content'];
                $type = 'text';
            }

            if(isset($responseArray['choices'][0]['message']['audio']['transcript'])){
                $chatResponse = $responseArray['choices'][0]['message']['audio']['transcript'];
                $audioId = $responseArray['choices'][0]['message']['audio']['id'];
                $encodedAudioFile = $responseArray['choices'][0]['message']['audio']['data'];
                $type = 'audio';
            }

            return [
                'type' => $type,
                'text' => $chatResponse,
                'audio' => [
                    'id' => $audioId,
                    'data' => $encodedAudioFile,
                    'transcript' => $chatResponse
                ]
            ];
        }
    }

    protected function saveBase64Audio($base64Data, $organizationId, $fileName)
    {
        $storage = Setting::where('key', 'storage_system')->first()->value;
        $audioData = base64_decode($base64Data);

        // Create a temporary stream and write the audio data into it
        $stream = fopen('php://temp', 'rb+');
        fwrite($stream, $audioData);
        rewind($stream);

        if($storage === 'local'){
            // Get the public URL for accessing the audio file
            $filePath = 'public/audios/' . $fileName . '.mp3';
            $file = \Storage::disk('local')->put($filePath, $stream);
            $mediaUrl = rtrim(config('app.url'), '/') . '/media/public/audios/' . $fileName . '.mp3';
        } else if($storage === 'aws') {
            $filePath = 'uploads/media/sent/'  . $organizationId . '/' . $fileName . '.mp3';
            $file = \Storage::disk('s3')->put($filePath, $stream);
            $mediaUrl = \Storage::disk('s3')->url($filePath);
        }

        // Close the temporary stream
        fclose($stream);

        return [
            'filePath' => $storage == 'aws' ? $mediaUrl : $filePath,
            'mediaUrl' => $mediaUrl,
            'location' => $storage == 'aws' ? 'amazon' : 'local'
        ];
    }

    protected function convertToMp3($filePath)
    {
        // Get the file extension
        $fileExtension = pathinfo($filePath, PATHINFO_EXTENSION);

        // Check if the file is already in mp3, mpeg, or wav format
        if (in_array(strtolower($fileExtension), ['mp3', 'mpeg', 'wav'])) {
            $base64Data = base64_encode(file_get_contents($filePath));

            return [
                'data' => $base64Data,
                'format' => $fileExtension == 'mpeg' || $fileExtension == 'mp3' ? 'mp3' : 'wav',
            ];
        }

        // Initialize FFmpeg
        //$ffmpeg = FFMpeg::create();
        $ffmpeg = FFMpeg::create(array(
            'ffmpeg.binaries' => config('ffmpeg.ffmpeg.binaries'),
            'ffprobe.binaries' => config('ffmpeg.ffprobe.binaries'),
            'timeout' => config('ffmpeg.timeout'),
            'threads' => config('ffmpeg.threads'),
        ));
        $audio = $ffmpeg->open($filePath);
        $format = new Mp3();
        $tempFile = tempnam(sys_get_temp_dir(), 'audio') . '.mp3';
        $audio->save($format, $tempFile);
        $base64Data = base64_encode(file_get_contents($tempFile));
        unlink($tempFile);

        return [
            'data' => $base64Data,
            'format' => 'mp3',
        ];
    }

    protected function transcribeAudioToText($organizationId, $audioPath)
    {
        $organizationConfig = Organization::where('id', $organizationId)->first();
        $organizationConfig = $organizationConfig ? json_decode($organizationConfig->metadata, true) : [];

        // Use Whisper API to transcribe audio to text
        $response = \Http::withHeaders([
            'Authorization' => 'Bearer ' . $organizationConfig['ai']['api_key']
        ])->attach('file', file_get_contents($audioPath), 'audio.mp3')
        ->post('https://api.openai.com/v1/audio/transcriptions', [
            'model' => 'whisper-1',
            'language' => 'en'
        ]);

        $responseArray = $response->json();
        
        if (isset($responseArray['text'])) {
            return [
                'success' => true,
                'message' => 'Transcription successful',
                'text' => $responseArray['text']
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Unable to transcribe audio',
                'text' => null
            ];
        }
    }

    protected function extractLastMessage($organizationId, $contactId){
        $chat = Chat::where('contact_id', $contactId)
                ->orderBy('created_at', 'desc') // Order by creation time
                ->first();
        $metadata = json_decode($chat->metadata, true);

        if($metadata['type'] === 'text'){
            return [
                'type' => 'text',
                'message' => $metadata['text']['body'] ?? null
            ];
        }

        if($metadata['type'] === 'button'){
            return [
                'type' => 'text',
                'message' => $metadata['button']['payload'] ?? null
            ];
        }

        if($metadata['type'] === 'audio'){
            $audio = ChatMedia::where('id', $chat->media_id)->first();

            if($audio->location === 'local'){
                $filePath = storage_path("app/{$audio->path}");
                $transcriptionResponse = $this->transcribeAudioToText($organizationId, $filePath);
            } else if($audio->location === 'amazon') {
                $filePath = $audio->path;
                $transcriptionResponse = $this->transcribeAudioToText($organizationId, $filePath);
            }

            if ($transcriptionResponse['success']) {
                return [
                    'type' => 'audio',
                    'message' => $transcriptionResponse['text']
                ];
            }
        }
    }

    protected function findClosestDocumentByQuery($organizationId, $query){
        $organizationConfig = Organization::where('id', $organizationId)->first();
        $organizationConfig = $organizationConfig ? json_decode($organizationConfig->metadata, true) : [];

        $api_key = $organizationConfig['ai']['api_key'];
        $client = OpenAI::client($api_key);

        try {
            // Generate embedding for query
            $response = $client->embeddings()->create([
                'input' => $query,
                'model' => 'text-embedding-ada-002'
            ]);
            $queryEmbedding = $response->embeddings[0]->embedding;

            // Find the closest document
            $documents = Document::where('organization_id', $organizationId)->get();
            $closestDocument = null;
            $closestDistance = PHP_FLOAT_MAX;

            foreach ($documents as $document) {
                $documentEmbeddings = json_decode($document->embeddings);

                foreach ($documentEmbeddings as $documentEmbedding) {
                    $distance = $this->cosineSimilarity($queryEmbedding, $documentEmbedding);

                    if ($distance < $closestDistance) {
                        $closestDistance = $distance;
                        $closestDocument = $document;
                    }
                }
            }

            if ($closestDocument) {
                return [
                    'success' => true,
                    'document' => $closestDocument->content
                ];
            }
        
            return [
                'success' => false,
                'document' => $closestDocument->content
            ];
        } catch (\Exception $e) {
            // Handle errors and exceptions
            return [
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ];
        }
    }

    protected function cosineSimilarity($vecA, $vecB)
    {
        $dotProduct = 0.0;
        $normA = 0.0;
        $normB = 0.0;

        for ($i = 0; $i < count($vecA); $i++) {
            $dotProduct += $vecA[$i] * $vecB[$i];
            $normA += $vecA[$i] ** 2;
            $normB += $vecB[$i] ** 2;
        }

        return 1 - ($dotProduct / (sqrt($normA) * sqrt($normB)));
    }

    protected function initializeWhatsappService($organizationId)
    {
        $config = Organization::where('id', $organizationId)->first()->metadata;
        $config = $config ? json_decode($config, true) : [];

        $accessToken = $config['whatsapp']['access_token'] ?? null;
        $apiVersion = 'v18.0';
        $appId = $config['whatsapp']['app_id'] ?? null;
        $phoneNumberId = $config['whatsapp']['phone_number_id'] ?? null;
        $wabaId = $config['whatsapp']['waba_id'] ?? null;

        return new WhatsappService($accessToken, $apiVersion, $appId, $phoneNumberId, $wabaId, $organizationId);
    }
}
