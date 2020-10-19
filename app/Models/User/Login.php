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

    public function user()
    {
        $this->hasOne(User::class);
    }
}
