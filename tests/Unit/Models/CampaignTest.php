<?php

namespace Tests\Unit\Models;

use App\Models\Campaign;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Tests\ModelTestCase;

class CampaignTest extends ModelTestCase
{
    protected $fillable = [
        'name',
        'description'
    ];

    public function setUp(): void
    {
        parent::setUp();
        $this->model = new Campaign();
    }

    public function test_model_configuration()
    {
        $this->runConfigurationAssertions(
            'campaigns',
            $this->fillable
        );
    }

    public function test_maps_relation()
    {
        $relation = $this->model->maps();
        $this->assertInstanceOf(HasMany::class, $relation);
    }

    public function test_images_relation()
    {
        $relation = $this->model->images();
        $this->assertInstanceOf(HasMany::class, $relation);
    }

    public function test_entities_relation()
    {
        $relation = $this->model->entities();
        $this->assertInstanceOf(HasMany::class, $relation);
    }
}
