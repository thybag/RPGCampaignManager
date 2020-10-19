<?php

namespace App\Models\Campaign\Entity;

use App\Models\Model;
use App\Models\Campaign\Entity;
use App\Http\Resources\Campaign\Entity\BlockResource;

class Block extends Model
{
    protected $attributes = [
        'type' => 'text'
    ];

    protected $fillable = [
        'type',
        'content'
    ];

    public function entity()
    {
        return $this->belongsTo(Entity::class);
    }
}
