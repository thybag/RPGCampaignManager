<?php

namespace App\Models\User;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    protected $table = 'user_logins';

    protected $fillable = [
        'ip', 'user_id', 'user_agent',
    ];

    public function User()
    {
        $this->hasOne(User::class);
    }
}
