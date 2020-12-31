<?php

namespace App\Providers;

use App\Models\Campaign;
use App\Models\Campaign\Entity;
use App\Observers\EntityObserver;
use App\Observers\CampaignObserver;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Campaign::observe(CampaignObserver::class);
        Entity::observe(EntityObserver::class);
        // workaround
        Schema::defaultStringLength(191);
    }
}
