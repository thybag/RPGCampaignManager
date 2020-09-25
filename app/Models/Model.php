<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    public function getResource()
    {
        $resouce = str_replace('Models', 'Http\Resources', static::class) . 'Resource';
        return $resouce;
    }
}
