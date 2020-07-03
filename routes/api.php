<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('notices', 'NoticeController');
Route::get('/categories', 'CategoryController@index')->name('categories.index');