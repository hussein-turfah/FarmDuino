<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\NewPasswordController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(["prefix" => "v1.0.0"], function () {

    Route::post('/register', [RegisterController::class, "register"]);
    Route::post('/login', [LoginController::class, "login"]);
    Route::post('/check-color', [NewPasswordController::class, "checkColor"]);

    Route::controller(AuthController::class)->group(function () {
        Route::post('/logout', 'logout');
        Route::post('/refresh', 'refresh');
        Route::post('/change-email', [UserController::class, "changeEmail"]);
        Route::post('/change-password', [NewPasswordController::class, "newPassword"]);
    });
    
});