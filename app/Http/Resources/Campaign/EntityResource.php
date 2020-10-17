<?php

namespace App\Http\Resources\Campaign;

use App\Http\Resources\BaseResource;

class EntityResource extends BaseResource
{
    protected $includes = [
        'blocks'
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
            'id'         => $this->id,
            'category'   => $this->category,
            'name'       => $this->name,
            'slug'       => $this->slug,
            'map_id'     => $this->map_id,
            'geo'        => $this->geo,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    public function links($request)
    {
        return [
            'get'       => url("/campaign/{$this->campaign_id}/entity/{$this->id}"),
            'update'    => url("/campaign/{$this->campaign_id}/entity/{$this->id}"),
            'create'    => url("/campaign/{$this->campaign_id}/entity/"),
            'newBlock'  => url("/campaign/{$this->campaign_id}/entity/{$this->id}/block"),
        ];
    }
}
