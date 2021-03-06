<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubmitFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'int|exists:users,id|nullable',
            'name' => 'nullable',
            'phone' => 'nullable',
            'date_of_birth' => 'nullable',
            'gender' => 'nullable',
        ];
    }
}
