<?php

namespace App\Models\Campaign;

use App\Models\Model;
use Illuminate\Support\Str;
use App\Models\Campaign\Entity\Block;

class Entity extends Model
{
    public function __construct(array $attributes = []) {
        // Add slug listener
        static::saving(function($model) {
            $model->slug = Str::slug($model->name);
        });

        parent::__construct($attributes);
    }

	protected $with = [
		'blocks'
	];

    protected $fillable = [
        'name',
        'category',
        'map_id',
        'geo'
    ];

    public function blocks()
    {
        return $this->hasMany(Block::class);
    }
}
