<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Models\Campaign'               => 'App\Policies\CampaignPolicy',
        'App\Models\Campaign\Map'           => 'App\Policies\Campaign\MapPolicy',
        'App\Models\Campaign\Entity'        => 'App\Policies\Campaign\EntityPolicy',
        'App\Models\Campaign\Entity\Block'  => 'App\Policies\Campaign\Entity\BlockPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
