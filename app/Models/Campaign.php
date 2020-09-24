<?php

namespace App\Models;

use App\Models\Campaign\Map;
use App\Models\Campaign\Entity;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    protected $fillable = [
        'name'
    ];

    public function maps()
    {
        return $this->hasMany(Map::class);
    }

    public function entities()
    {
        return $this->hasMany(Entity::class);
    }
}
