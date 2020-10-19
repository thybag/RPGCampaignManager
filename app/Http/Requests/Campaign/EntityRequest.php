<?php
namespace App\Http\Requests\Campaign;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class EntityRequest extends FormRequest
{
    public function rules()
    {
        return [
            'data.name'        => 'required|string|max:255',
            'data.category'    => 'required|string|max:255',
            'data.map_id'      => 'required_with:data.geo|exists:maps,id',
            'data.geo'         => 'required_with:data.map_id'
        ];
    }
}
