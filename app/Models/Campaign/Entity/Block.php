<?php

namespace App\Models\Campaign\Entity;

use App\Models\Campaign\Entity;
use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\Campaign\Entity\BlockResource;

class Block extends Model
{
    protected $fillable = [
        'type',
        'content'
    ];

    public function getResouce()
    {
    	return BlockResource::class;
    }

    public function entity()
    {
        return $this->belongsTo(Entity::class);
    }
}
