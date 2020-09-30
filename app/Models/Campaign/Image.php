<?php

namespace App\Models\Campaign;

use Illuminate\Database\Eloquent\Model;

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
