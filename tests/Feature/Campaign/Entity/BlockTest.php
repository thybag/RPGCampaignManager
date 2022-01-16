<?php

namespace Tests\Feature\Campaign\Entity;

use App\Models\User;
use App\Models\Campaign;
use Tests\TestCase;
use App\Models\Campaign\Entity\Block;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlockTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // User 1 with campaign 1
        $this->user = User::factory()->create();
        $this->campaign = Campaign::make(['name'=>'test', 'description'=>'hi']);
        $this->user->campaigns()->save($this->campaign);
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
        $response = $this->get('campaign/1/entity/1/block/1');
        $response->assertRedirect('/login');
    }

    /**
     * Get data back when authed as correct user
     *
     * @return void
     */
    public function testCanViewOwnCampaignEntityBlockTest()
    {
        // Check default block was created
        $response = $this->actingAs($this->user)->get('campaign/1/entity/1/block/1');
        $response->assertStatus(200);
        $data = $response->json();
        $this->assertEquals($data['data']['block_type'], 'text');
    }

    /**
     * Check can only view their own block data
     *
     * @group aa
     * @return void
     */
    public function testCannotViewOthersCampaignTest()
    {
        // Attempt to view campaign 2's block 2
        $response = $this->actingAs($this->user)->get('campaign/2/entity/2/block/1');
        $response->assertStatus(403);
        // Attempt to view campaign 2's block 2 via campaign 1
        $response = $this->actingAs($this->user)->get('campaign/1/entity/1/block/2');
        $response->assertStatus(403);
        // User 2 attempting to view campaign 1's block 1
        $response = $this->actingAs($this->user2)->get('campaign/1/entity/1/block/1');
        $response->assertStatus(403);
        // Can both view their own
        $response = $this->actingAs($this->user)->get('campaign/1/entity/1/block/1');
        $response->assertStatus(200);
        $response = $this->actingAs($this->user2)->get('campaign/2/entity/2/block/2');
        $response->assertStatus(200);
    }

    /**
     * Create new block on my campaign
     *
     * @return void
     */
    public function testCreateBlockTest()
    {
        // Missing category
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/entity/1/block',
            [
                'data' => [
                    'content' => 'Howdy',
                ]
            ]
        );

        $response->assertStatus(201);
        $data = $response->json();
        $this->assertEquals($data['data']['content'], 'Howdy');
    }

    /**
     * Update an blocks's data
     *
     * @return void
     */
    public function testUpdateBlockTest()
    {
        // full update
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/entity/1/block/1',
            [
                'data' => [
                    'content' => 'Ahoy'
                ]
            ]
        );
        $response->assertStatus(200);
        $data = $response->json();
        $this->assertEquals($data['data']['content'], 'Ahoy');
    }

    /**
     * Attempt to make an entity on someone elses campaign
     *
     * @return void
     */
    public function testCreateBlockChangeSomeoneElsesTest()
    {
        // Via my campaign id
        $response = $this->actingAs($this->user2)->json(
            'POST',
            'campaign/1/entity/1/block/',
            [
                'data' => [
                    'content' => 'wot'
                ]
            ]
        );
        $response->assertStatus(403);
    }
}
