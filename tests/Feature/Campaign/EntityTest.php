<?php

namespace Tests\Feature\Campaign;

use App\Models\User;
use App\Models\Campaign;
use Tests\TestCase;
use App\Models\Campaign\Map;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EntityTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // User 1 with campaign 1
        $this->user = User::factory()->create();
        $this->campaign = Campaign::make(['name'=>'test', 'description'=>'hi']);
        $this->user->campaigns()->save($this->campaign);
        $this->campaign->maps()->save(Map::make(['name' => 'yo', 'path' => 'yep']));

        // User 2 with campaign 2
        $this->user2 = User::factory()->create();
        $this->campaign2 = Campaign::make(['name'=>'Campaign 2', 'description'=>'hi']);
        $this->user2->campaigns()->save($this->campaign2);
    }

    /**
     * Redirected to login when not authed
     *
     * @return void
     */
    public function testGuestCannotViewCampaignTest()
    {
        $response = $this->get('campaign/1/entity/1');
        $response->assertRedirect('/login');
    }

    /**
     * Get data back when authed as correct user
     *
     * @return void
     */
    public function testCanViewOwnCampaignTest()
    {
        // Check default entity was created
        $response = $this->actingAs($this->user)->get('campaign/1/entity/1');
        $response->assertStatus(200);
        $data = $response->json();

        $this->assertEquals($data['data']['name'], 'Welcome to test');
    }

    /**
     * Check can only view their own entity data
     *
     * @return void
     */
    public function testCannotViewOthersCampaignTest()
    {
        // Attempt to view campaign 2's entity 2
        $response = $this->actingAs($this->user)->get('campaign/2/entity/2');
        $response->assertStatus(403);
        // Attempt to view campaign 2's entity 2 via campaign 1
        $response = $this->actingAs($this->user)->get('campaign/1/entity/2');
        $response->assertStatus(403);
        // User 2 attempting to view campaign 1's entity 1
        $response = $this->actingAs($this->user2)->get('campaign/1/entity/1');
        $response->assertStatus(403);
        // Can both view their own
        $response = $this->actingAs($this->user)->get('campaign/1/entity/1');
        $response->assertStatus(200);
        $response = $this->actingAs($this->user2)->get('campaign/2/entity/2');
        $response->assertStatus(200);
    }

    /**
     * Create new entity on my campaign
     *
     * @return void
     */
    public function testCreateEntityTest()
    {
        // Missing category
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/entity/',
            [
                'data' => [
                    'name' => 'My first entity',
                ]
            ]
        );
        $response->assertStatus(422);
        $data = $response->json();
        $this->assertArrayHasKey('data.category', $data['errors']);

        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/entity/',
            [
                'data' => [
                    'name' => 'My first entity',
                    'category' => 'potato'
                ]
            ]
        );

        $response->assertStatus(201);
        $data = $response->json();
        $this->assertEquals($data['data']['name'], 'My first entity');
    }

    /**
     * Create new entity on my campaign with Geo
     *
     * @return void
     */
    public function testCreateEntityWithGeoTest()
    {
        // Check requires map_id to have geo
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/entity/',
            [
                'data' => [
                    'name' => 'My first entity',
                    'category' => 'potato',
                    'geo' => '[]'
                ]
            ]
        );
        $response->assertStatus(422);
        $data = $response->json();
        $this->assertArrayHasKey('data.map_id', $data['errors']);

        // Check map id is real
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/entity/',
            [
                'data' => [
                    'name' => 'My first entity',
                    'category' => 'potato',
                    'geo' => '[]',
                    'map_id' => 4
                ]
            ]
        );
        $response->assertStatus(422);
        $data = $response->json();
        $this->assertArrayHasKey('data.map_id', $data['errors']);

        // Check map id is real
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/entity/',
            [
                'data' => [
                    'name' => 'My first entity',
                    'category' => 'potato',
                    'geo' => '[]',
                    'map_id' => 1
                ]
            ]
        );
        $response->assertStatus(201);
        $data = $response->json();
    }

    /**
     * Update an entity's data
     *
     * @return void
     */
    public function testUpdateEntityTest()
    {
        // full update
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/entity/1',
            [
                'data' => [
                    'name' => 'My second entity',
                    'category' => 'ABC',
                    'geo' => '{}',
                    'map_id' => 1
                ]
            ]
        );
        $response->assertStatus(200);
        $data = $response->json();
        $this->assertEquals($data['data']['map_id'], 1);

        // Partial update
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/entity/1',
            [
                'data' => [
                    'name' => 'New name & Cat',
                    'category' => 'potato',
                ]
            ]
        );
        $response->assertStatus(200);
        $data = $response->json();
        // Geo and map not wiped?
        $this->assertEquals($data['data']['map_id'], 1);
    }

    /**
     * Attempt to make an entity on someone elses campaign
     *
     * @return void
     */
    public function testCreateEntityChangeSomeoneElsesTest()
    {
        // Via my campaign id
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/2/entity/',
            [
                'data' => [
                    'name' => 'My second entity',
                    'category' => 'ABC',
                    'geo' => '{}',
                    'map_id' => 1
                ]
            ]
        );
        $response->assertStatus(403);
    }

    /**
     * Attempt to update an entity on someone elses campaign
     *
     * @return void
     */
    public function testUpdateEntityChangeSomeoneElsesTest()
    {
        // Via my campaign id
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/entity/2',
            [
                'data' => [
                    'name' => 'My second entity',
                    'category' => 'ABC',
                    'geo' => '{}',
                    'map_id' => 1
                ]
            ]
        );
        $response->assertStatus(403);
        // Via their campaign id
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/2/entity/2',
            [
                'data' => [
                    'name' => 'My second entity',
                    'category' => 'ABC',
                    'geo' => '{}',
                    'map_id' => 1
                ]
            ]
        );
        $response->assertStatus(403);
    }
}
