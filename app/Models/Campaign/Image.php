<?php

namespace App\Models\Campaign;

use DB;
use Storage;
use App\Models\Model;
use Image as Intervention ;

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

    public static function upload($campaign, $img) 
    {
        return DB::transaction(function() use ($campaign, $img) {
            // Get details
            $ext = $img->getClientOriginalExtension();
            $hash = md5_file($img->getRealPath());
            $img->storeAs("{$campaign->user_id}/{$campaign->id}", "{$hash}.{$ext}", 'public');

            $preview = Intervention::make($img)->resize(400, 400, 
                function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })
            ->encode();

            Storage::disk('public')->put("{$campaign->user_id}/{$campaign->id}/{$hash}_preview.{$ext}", $preview);

            // FIle is okay!
            $model = static::make(['path' => "{$campaign->user_id}/{$campaign->id}/{$hash}.{$ext}", 'name'=> $img->getClientOriginalName()]);
            $campaign->images()->save($model);
            return $model;
        });
    }
}
