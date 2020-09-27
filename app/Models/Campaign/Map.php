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

    public function getPreviewAttribute()
    {
    	return asset('storage/'.str_replace('.', '_preview.', $this->path));
    }
    public function getMapURLAttribute()
    {
    	return asset('storage/'.$this->path);
    }

}
