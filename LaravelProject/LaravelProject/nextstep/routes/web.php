<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $view = view('welcome');
    \Event::dispatch(new \App\Events\PublishProcessor(1));
    return $view;
});

Route::get('/test', function () {
    return view('test');
});
