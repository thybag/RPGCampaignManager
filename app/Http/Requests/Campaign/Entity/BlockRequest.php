<?php
namespace App\Http\Requests\Campaign\Entity;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class BlockRequest extends FormRequest
{
    public function rules()
    {
        return [
            'data.content' => 'required|string|max:65535',
        ];
    }
}
