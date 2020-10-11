<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    protected $table = 'user_logins';

    protected $fillable = [
        'user_id', 'user_agent',
    ];

    public function User()
    {
        $this->hasOne(User::class);
    }
}
