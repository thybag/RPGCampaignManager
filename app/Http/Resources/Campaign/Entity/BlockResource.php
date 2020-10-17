<?php
namespace App\Http\Resources\Campaign\Entity;

use App\Http\Resources\BaseResource;

class BlockResource extends BaseResource
{
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
            'type'       => 'block',
            'block_type' => $this->type,
            'content'    => $this->content,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    public function links($request)
    {
        return [
            'get' => url("/campaign/{$this->entity->campaign_id}/entity/{$this->entity_id}/block/{$this->id}"),
            'update' => url("/campaign/{$this->entity->campaign_id}/entity/{$this->entity_id}/block/{$this->id}"),
        ];
    }
}
