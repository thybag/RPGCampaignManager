<?php

use Illuminate\Support\Facades\Route;

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
Auth::routes();

Route::group(['middleware' => 'auth'],
    function () {
    	Route::get('/', 'CampaignController@index')->name('home');

    	Route::resource('campaign', CampaignController::class);
    	Route::resource('campaign.entity', Campaign\EntityController::class);
    	Route::resource('campaign.entity.block', Campaign\Entity\BlockController::class);
    	Route::resource('campaign.map', Campaign\MapController::class);
	}
);


