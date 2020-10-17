<?php
namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CampaignRequest extends FormRequest
{
    public function rules()
    {
        $rules = [
            'name'           => 'required|string|max:255',
            'description'    => 'required|string|max:5000',
        ];

        // Only settable when editing
        $campaign = static::route('campaign');
        if (!empty($campaign)) {
            $rules['default_map_id'] = 'nullable|exists:maps,id,campaign_id,' . $campaign->id;
            $rules['default_entity_id'] = 'exists:entities,id,campaign_id,' . $campaign->id;
        }

        return $rules;
    }
}
