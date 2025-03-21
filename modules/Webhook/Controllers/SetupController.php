<?php

namespace Modules\Webhook\Controllers;

use App\Http\Controllers\Controller as BaseController;

use Modules\Webhook\Requests\StoreSettings;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class SetupController extends BaseController
{
    public function store(StoreSettings $request){
        $settings = $request->settings;

        foreach ($settings as $key => $value) {
            DB::table('settings')->updateOrInsert([
                'key' => $key
            ],[
                'value' => $value,
            ]);
        }

        return redirect('/admin/addons')->with(
            'status', [
                'type' => 'success', 
                'message' => __('Webhook settings updated successfully!')
            ]
        );
    }

    public function update(Request $request){
        $metadata = [
            "input_fields" => [
                [
                    "element" => "toggle",
                    "type" => "checkbox",
                    "name" => "webhook",
                    "label" => "Enable Webhooks",
                    "class" => "col-span-2"
                ]
            ]
        ];

        //Run migrations
        $migrateOutput = Artisan::call('module:migrate', [
            'module' => 'Webhook',  // Specify the module name as an argument
            '--force' => true,
        ]);

        Addon::where('uuid', $request->uuid)->update(['metadata' => json_encode($metadata)]);
    }
}