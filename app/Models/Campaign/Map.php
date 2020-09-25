<?php

namespace App\Models\Campaign;

use App\Models\Model;
use App\Models\Campaign\Entity;

class Map extends Model
{
    protected $fillable = [
        'name',
        'path'
    ];

    public function entities()
    {
        return $this->hasMany(Entity::class);
    }

}
