<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/action/favorite', 'FavoriteAction@switchFavorite');
Route::get('/action/favorite', 'FavoriteAction@switchFavorite');

Route::group(['middleware' => 'api'], function ($router) {
    Route::post('/users/login', 'User\\LoginAction');
    Route::post('/users/', 'User\\RetrieveAction')->middleware('auth:api');
});