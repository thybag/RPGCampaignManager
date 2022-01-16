<?php

namespace App\Models;

use App\Models\Model;
use App\Models\Campaign\Map;
use App\Models\Campaign\Image;
use App\Models\Campaign\Entity;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Campaign extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'default_map_id',
        'default_entity_id',
    ];

    public function maps()
    {
        return $this->hasMany(Map::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function entities()
    {
        return $this->hasMany(Entity::class);
    }
}
