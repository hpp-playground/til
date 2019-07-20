<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\DataProvider\Database\RegisterReviewDataProvider;
use App\DataProvider\RegisterReviewProviderInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(RegisterReviewProviderInterface::class, function () {
            return new RegisterReviewDataProvider();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
