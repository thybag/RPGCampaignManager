<?php
namespace App\Http\Requests\Campaign;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class MapRequest extends FormRequest
{
    public function rules()
    {
        // Required on create
        $required = $this->method() === 'POST' ? 'required|' : '';
        return [
            'name'   => 'required|string|max:255',
            'image' =>  $required.'mimes:jpeg,jpg,png,gif'
        ];
    }
}