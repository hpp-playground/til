<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use App\BlowfishEncrypter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        #$this->app->singleton('FavoriteService', function ($app) {
            #return new App\Services\FavoriteService($app);
        #});
        
        $this->app->bind(
            \App\DataProvider\FavoriteRepositoryInterface::class,
            \App\DataProvider\FavoriteRepository::class
        );
    
        $this->app->singleton('encrypter', function ($app) {
            $config = $app->make('config')->get('app');

            if (Str::startsWith($key = $this->key($config), 'base64:')) {
                $key = base64_decode(substr($key, 7));
            }
            return new BlowfishEncrypter($key);
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

    public function key(array $config)
    {
        return tap($config['key'], function ($key) {
            if (empty($key)) {
                throw new RuntimeException(
                    'No application encryption key has been specified.'
                );
            }
        });
    }
}
