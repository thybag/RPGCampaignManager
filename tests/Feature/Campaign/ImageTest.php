<?php

namespace Tests\Feature;

use Storage;
use Tests\TestCase;
use App\Models\User;
use App\Models\Campaign;
use App\Models\Campaign\Image;
use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ImageTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // User 1 with campaign 1
        $this->user = User::factory()->create();
        $this->campaign = Campaign::make(['name'=>'test', 'description'=>'hi']);
        $this->user->campaigns()->save($this->campaign);
        $this->image = Image::make(['name' => 'Hi', 'path' => '..']);
        $this->campaign->images()->save($this->image);

        // User 2 with campaign 2
        $this->user2 = User::factory()->create();
        $this->campaign2 = Campaign::make(['name'=>'Campaign 2', 'description'=>'hi']);
        $this->user2->campaigns()->save($this->campaign2);
        $this->image2 = Image::make(['name' => 'Sup', 'path' => '...']);
        $this->campaign2->images()->save($this->image2);
    }

    /**
     * Redirected to login when not authed
     *
     * @return void
     */
    public function testGuestCannotViewCampaignImageTest()
    {
        $response = $this->get('campaign/1/image/1');
        $response->assertRedirect('/login');
    }

    /**
     * Get data back when authed as correct user
     *
     * @return void
     */
    public function testCanViewOwnCampaignImageTest()
    {
        // Check default image was created
        $response = $this->actingAs($this->user)->get('campaign/1/image/1');
        $response->assertStatus(200);
        $data = $response->json();

        $this->assertEquals($data['data']['name'], 'Hi');
    }

    /**
     * Check can only view their own image data
     *
     * @return void
     */
    public function testCannotViewOthersCampaignImageTest()
    {
        // Attempt to view campaign 2's image 2
        $response = $this->actingAs($this->user)->get('campaign/2/image/2');
        $response->assertStatus(403);
        // Attempt to view campaign 2's image 2 via campaign 1
        $response = $this->actingAs($this->user)->get('campaign/1/image/2');
        $response->assertStatus(403);
        // User 2 attempting to view campaign 1's image 1
        $response = $this->actingAs($this->user2)->get('campaign/1/image/1');
        $response->assertStatus(403);
        // Can both view their own
        $response = $this->actingAs($this->user)->get('campaign/1/image/1');
        $response->assertStatus(200);
        $response = $this->actingAs($this->user2)->get('campaign/2/image/2');
        $response->assertStatus(200);
    }

    /**
     * Create new image on my campaign
     *
     * @return void
     */
    public function testCreateImageTest()
    {
        Storage::fake('public');

        // Missing image
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/image/',
            [
                'name' => 'My first image',
            ]
        );
        $response->assertStatus(422);
        $data = $response->json();
        $this->assertArrayHasKey('image', $data['errors']);

        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/image/',
            [
                'name' => 'My first image',
                'image' => UploadedFile::fake()->image('avatar.jpg')
            ]
        );
        $response->assertRedirect('campaign/1/image/3/edit');
    }

    /**
     * Create new image on my campaign
     *
     * @return void
     */
    public function testCreateJsonImageTest()
    {
        Storage::fake('public');
       
        // Missing image
        $response = $this->actingAs($this->user)
        ->withHeaders(
            [
                'X-Requested-With' => 'XMLHttpRequest'
            ]
        )->json(
            'POST',
            'campaign/1/image/',
            [
                'name' => 'My first image',
            ]
        );
        $response->assertStatus(422);
        $data = $response->json();
        $this->assertArrayHasKey('image', $data['errors']);
   
        $response = $this->actingAs($this->user)
        ->withHeaders(
            [
                'X-Requested-With' => 'XMLHttpRequest'
            ]
        )->json(
            'POST',
            'campaign/1/image/',
            [
                'name' => 'My first image',
                'image' => UploadedFile::fake()->image('avatar.jpg')
            ]
        );
        $data = $response->json();
        $this->assertEquals($data['data']['name'], 'My first image');
    }

    /**
     * Create new image on my campaign
     *
     * @return void
     */
    public function testCreateImageWithoutNameTest()
    {
        Storage::fake('public');

        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/1/image/',
            [
                'image' => UploadedFile::fake()->image('avatar2.jpg')
            ]
        );
        $response->assertRedirect('campaign/1/image/3/edit');
    }

    /**
     * Update an image's data
     *
     * @return void
     */
    public function testUpdateImageTest()
    {
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/image/1',
            [
                'name' => 'new name',
            ]
        );
        $response->assertRedirect('campaign/1/image/1/edit');
    }

    /**
     * Attempt to make an image on someone elses campaign
     *
     * @return void
     */
    public function testCreateImageChangeSomeoneElsesTest()
    {
        // Via my campaign id
        $response = $this->actingAs($this->user)->json(
            'POST',
            'campaign/2/image/',
            [
                'name' => 'My second image',
            ]
        );
        $response->assertStatus(403);
    }

    /**
     * Attempt to update an image on someone elses campaign
     *
     * @return void
     */
    public function testUpdateImageChangeSomeoneElsesTest()
    {
        // Via my campaign id
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/1/image/2',
            [
                'name' => 'My second image',
            ]
        );
        $response->assertStatus(403);
        // Via their campaign id
        $response = $this->actingAs($this->user)->json(
            'PUT',
            'campaign/2/image/2',
            [
                'name' => 'My second image',
            ]
        );
        $response->assertStatus(403);
    }
}
