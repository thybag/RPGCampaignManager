<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    const USERS = [[
        'name' => 'Test User',
        'email' => 'user@campaign-manager.local',
        'password' => 'password',
    ]];

    public function run(): void
    {
        foreach (static::USERS as $data) {
            factory(User::class)->create(['password' => Hash::make($data['password'])] + $data);
        }
    }
}
