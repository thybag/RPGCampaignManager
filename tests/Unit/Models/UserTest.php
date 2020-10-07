<?php

namespace Tests\Unit\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Tests\ModelTestCase;

class UserTest extends ModelTestCase
{
    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function setUp(): void
    {
        parent::setUp();
        $this->model = new User();
    }

    public function test_model_configuration()
    {
        $this->runConfigurationAssertions(
            'users',
            $this->fillable,
            $this->hidden
        );
    }

    public function test_campaigns_relation()
    {
        $relation = $this->model->campaigns();
        $this->assertInstanceOf(HasMany::class, $relation);
    }
}
