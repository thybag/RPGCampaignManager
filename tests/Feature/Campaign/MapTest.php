<?php

namespace Tests\Feature\Campaign;

use Storage;
use Tests\TestCase;
use App\Models\User;
use App\Models\Campaign;
use App\Models\Campaign\Map;
use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MapTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // User 1 with campaign 1
        $this->user = User::factory()->create();
        $this->campaign = Campaign::make(['name'=>'test', 'description'=>'hi']);
        $this->user->campaigns()->save($this->campaign);
        $this->map = Map::make(['name' => 'yo', 'path' => 'yep']);
        $this->campaign->maps()->save($this->map);

        // User 2 with campaign 2
        $this->user2 = User::factory()->create();
        $this->campaign2 = Campaign::make(['name'=>'Campaign 2', 'description'=>'hi']);
        $this->user2->campaigns()->save($this->campaign2);
        $this->map2 = Map::make(['name' => 'yo', 'path' => 'yep']);
        $this->campaign2->maps()->save($this->map2);
    }

    /**
     * Redirected to login when not authed
     *
     * @return void
     */
    public function testGuestCannotViewCampaignMapTest()
    {
        $response = $this->get('campaign/1/map/1');
        $response->assertRedirect('/login');
    }

    /**
     * Get data back when authed as correct user
     *
     * @return void
     */
    public function testCanViewOwnCampaignMapTest()
    {
        // Check default map was created
        $response = $this->actingAs($this->user)->get('campaign/1/map/1');
        $response->assertStatus(200);
        $data = $response->json();

        $this->assertEquals($data['data']['name'], 'yo');
    }

    /**
     * Check can only view their own map data
     *
     * @return void
     */
    public function testCannotViewOthersCampaignMapTest()
    {
        // Attempt to view campaign 2's map 2
        $response = $this->actingAs($this->user)->get('campaign/2/map/2');
        $response->assertStatus(403);
        // Attempt to view campaign 2's map 2 via campaign 1
        $response = $this->actingAs($this->user)->get('campaign/1/map/2');
        $response->assertStatus(403);
        // User 2 attempting to view campaign 1's map 1
        $response = $this->actingAs($this->user2)->get('campaign/1/map/1');
        $response->assertStatus(403);
        // Can both view their own
        $response = $this->actingAs($this->user)->get('campaign/1/map/1');
        $response->assertStatus(200);
        $response = $this->actingAs($this->user2)->get('campaign/2/map/2');
        $response->assertStatus(200);
    }

    /**
     * Create new map on my campaign
     *
     * @return void
     */
    public function testCreateMapTest()
    {
        Storage::fake('public');

        // Missing image
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/map/',
            [
                'name' => 'My first map',
            ]
        );
        $response->assertStatus(422);
        $data = $response->json();
        $this->assertArrayHasKey('image', $data['errors']);

        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/map/',
            [
                'name' => 'My first map',
                'image' => UploadedFile::fake()->image('avatar.jpg')
            ]
        );
        $response->assertRedirect('campaign/1/map/');
    }

    /**
     * Update an map's data
     *
     * @return void
     */
    public function testUpdateMapTest()
    {
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/map/1',
            [
                'name' => 'new name',
            ]
        );
        $response->assertRedirect('campaign/1/map/');
    }

    /**
     * Attempt to make an map on someone elses campaign
     *
     * @return void
     */
    public function testCreateMapChangeSomeoneElsesTest()
    {
        // Via my campaign id
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/2/map/',
            [
                'name' => 'My second map',
            ]
        );
        $response->assertStatus(403);
    }

    /**
     * Attempt to update an map on someone elses campaign
     *
     * @return void
     */
    public function testUpdateMapChangeSomeoneElsesTest()
    {
        // Via my campaign id
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/map/2',
            [
                'name' => 'My second map',
            ]
        );
        $response->assertStatus(403);
        // Via their campaign id
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/2/map/2',
            [
                'name' => 'My second map',
            ]
        );
        $response->assertStatus(403);
    }
}
