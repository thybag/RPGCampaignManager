<?php

namespace App\Http\Resources\Campaign\Entity;

use Route;
use Illuminate\Http\Resources\Json\JsonResource;

class BlockResource extends JsonResource
{
    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => 'block',
            'data' => [
                'name' => $this->name,
                'content' => $this->content,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ],
            'links' => [
                'get' => url("/campaign/{$this->entity->campaign_id}/entity/{$this->entity_id}/block{$this->id}"),
                'update' => url("/campaign/{$this->entity->campaign_id}/entity/{$this->entity_id}/block/{$this->id}"),
            ],
        ];
    }
}