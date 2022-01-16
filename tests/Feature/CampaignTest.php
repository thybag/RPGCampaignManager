<?php

namespace Tests\Feature;

use App\Models\Campaign;
use Tests\DatabaseTestCase;
use Database\Seeders\UserSeeder;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CampaignTest extends DatabaseTestCase
{
    use RefreshDatabase;

    protected $userEmail;
    public $seedClasses = [UserSeeder::class];

    public function setUp(): void
    {
        parent::setUp();

        $this->userEmail = UserSeeder::USERS[0]['email'];
    }

    public function testUnauthorizedAccess()
    {
        $this->expectException(AuthenticationException::class);

        $this->post('campaign', $this->getDummyData())
            ->json();
    }

    public function testCreateCampaign()
    {
        $user = $this->loginUsingEmail($this->userEmail);
        $dummyData = $this->getDummyData();

        $response = $this->post('campaign', $dummyData);
       
        $campaign = Campaign::where($dummyData)->firstOrFail();
        $response->assertRedirect(url("campaign/{$campaign->id}"));
        $this->assertEquals($user->id, $campaign->user_id);
    }

    public function testUnprocessableEntity()
    {
        $this->loginUsingEmail($this->userEmail);

        $this->post('campaign', [])
            ->assertSessionHasErrors();

        $errors = session('errors');
        $this->assertEquals($errors->get('name')[0], 'The name field is required.');
        $this->assertEquals($errors->get('description')[0], 'The description field is required.');
    }

    protected function getDummyData(): array
    {
        return Campaign::factory()->make()->toArray();
    }
}
