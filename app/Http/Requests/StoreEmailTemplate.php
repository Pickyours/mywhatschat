<?php

namespace App\Http\Requests;

use App\Rules\UniquePhone;
use Illuminate\Foundation\Http\FormRequest;

class StoreEmailTemplate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            'subject' => 'required',
            'body' => 'required',
        ];

        return $rules;
    }
}
