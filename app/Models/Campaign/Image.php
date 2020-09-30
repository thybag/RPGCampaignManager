<?php

namespace App\Models\Campaign;

use App\Models\Model;

class Image extends Model
{
    protected $fillable = [
        'name',
        'path',
    ];

    public function getPreviewAttribute()
    {
    	return asset('storage/'.str_replace('.', '_preview.', $this->path));
    }

    public function getMapURLAttribute()
    {
    	return asset('storage/'.$this->path);
    }
}
