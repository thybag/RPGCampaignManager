<?php
namespace App\Http\Requests\Campaign;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ImageRequest extends FormRequest
{
    public function rules()
    {
        // Required on create
        $required = $this->method() === 'POST' ? 'required|' : '';
        return [
            'name'   => 'string|max:255',
            'image' =>  $required . 'mimes:jpeg,jpg,png,gif'
        ];
    }
}
