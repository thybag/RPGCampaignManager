<?php

namespace Tests;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\Testing\RefreshDatabase;

abstract class DatabaseTestCase extends TestCase
{
    use RefreshDatabase;

    public $seedClasses = [];

    public function setUp(): void
    {
        parent::setUp();

        $this->seedClasses();
    }

    protected function seedClasses(): void
    {
        foreach ($this->seedClasses as $class) {
            Artisan::call('db:seed', ['--class' => $class]);
        }
    }

    public function loginUsingEmail(string $email): User
    {
        $user = User::where('email', $email)
            ->firstOrFail();

        $this->actingAs($user);

        return $user;
    }
}
