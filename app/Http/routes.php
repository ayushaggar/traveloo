<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// OAuth, Login and Signup Routes.
Route::post('auth/facebook', 'AuthController@facebook');
Route::post('auth/foursquare', 'AuthController@foursquare');
Route::post('auth/google', 'AuthController@google');
Route::post('auth/login', 'AuthController@login');
Route::post('auth/signup', 'AuthController@signup');
Route::get('auth/unlink/{provider}', ['middleware' => 'auth', 'uses' => 'AuthController@unlink']);

Route::get('api/me', ['middleware' => 'auth', 'uses' => 'UserController@getUser']);
Route::put('api/me', ['middleware' => 'auth', 'uses' => 'UserController@updateUser']);

Route::post('/api/markin', ['middleware' => 'auth', 'uses' => 'MarkinsController@storeMarkin']);
Route::post('/api/dashboard', ['middleware' => 'auth', 'uses' => 'MarkinsController@getDashboard']);

// Initialize Angular.js App Route.

Route::get('/', 'HomeController@index');
