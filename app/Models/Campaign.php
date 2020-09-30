<?php

namespace App\Models;

use App\Models\Model;
use App\Models\Campaign\Map;
use App\Models\Campaign\Entity;
use App\Models\Campaign\Images;

class Campaign extends Model
{
    protected $fillable = [
        'name',
        'description'
    ];

    public function maps()
    {
        return $this->hasMany(Map::class);
    }

    public function images()
    {
        return $this->hasMany(Images::class);
    }

    public function entities()
    {
        return $this->hasMany(Entity::class);
    }
}
