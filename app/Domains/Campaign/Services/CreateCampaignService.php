<?php

namespace App\Domains\Campaign\Services;

use App\Domains\Campaign\Dto\CreateCampaignDTO;
use App\Models\Campaign;
use App\Models\User;

class CreateCampaignService
{
    public static function handle(User $user, CreateCampaignDTO $data): Campaign
    {
        $campaign = Campaign::make($data->toArray());
        
        return $user
            ->campaigns()
            ->save($campaign);
    }
}