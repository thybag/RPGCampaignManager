<?php

namespace App\Http\Resources\Campaign;

use App\Http\Resources\BaseResource;

class ImageResource extends BaseResource
{
    protected $includes = [
        'campaign',
        'map'
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
            'id'        => $this->id,
            'type'      => 'image',
            'name'      => $this->name,
            'url'       =>   $this->mapURL,
            'preview'   => $this->preview,
            'size_kb'   => $this->size_kb,
            'type'      => $this->type,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    public function links($request)
    {
        return [
            'get' => "/campaign/{$this->campaign_id}/image/{$this->id}",
            'update' => "/campaign/{$this->campaign_id}/image/{$this->id}"
        ];
    }
}
