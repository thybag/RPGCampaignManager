<?php

namespace App\Models\Campaign;

use Illuminate\Support\Str;
use App\Models\Campaign\Entity\Block;
use Illuminate\Database\Eloquent\Model;

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
        'geo'
    ];

    public function blocks()
    {
        return $this->hasMany(Block::class);
    }
}
