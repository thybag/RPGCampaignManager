<?php

namespace App\Policies;

use Request;
use App\Models\User;
use App\Models\Campaign;
use Illuminate\Auth\Access\HandlesAuthorization;

abstract class BasePolicy
{
    use HandlesAuthorization;

    protected function userOwnsCampaign(User $user)
    {
        $campaign = Request::route('campaign');
        return ($user->id == $campaign->user_id);
    }

    protected function ownedByCampaign($model)
    {
        $campaign = Request::route('campaign');
        return ($campaign->id == $model->campaign_id);
    }
}
