<?php

namespace App\Models\Campaign;

use App\Models\Model;
use App\Models\Campaign\Entity;
use App\Models\Campaign\Image;

class Map extends Model
{
    protected $fillable = [
        'name',
        'image_id'
    ];

    public function entities()
    {
        return $this->hasMany(Entity::class);
    }

    public function image()
    {
        return $this->belongsTo(Image::class);
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
