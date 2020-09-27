<?php

namespace App\Http\Resources\Campaign;

use App\Http\Resources\BaseResource;

class MapResource extends BaseResource
{
    protected $includes = [
        'campaign',
        'entities'
    ];

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function attributes($request)
    {
        return [
            'id' => $this->id,
            'type' => 'map',
            'name' => $this->name,
            'path' => $this->path,
            'mapUrl' => $this->mapURL,
            'preview' => $this->preview,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    public function links($request)
    {
        return [
            'get' => "/campaign/{$this->campaign_id}/map/{$this->id}",
            'update' => "/campaign/{$this->campaign_id}/map/{$this->id}"
        ];
    }

}