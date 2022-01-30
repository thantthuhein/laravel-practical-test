<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\LoginController;
use App\Http\Controllers\Api\V1\FormController;
use App\Http\Controllers\Api\V1\SubmissionController;

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
Route::post('V1/login', LoginController::class);
Route::get('V1/users/{user}/latest-form', [FormController::class, 'latestForm']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('V1/save-form', [FormController::class, 'save']);

    Route::post('V1/submit-form', [SubmissionController::class, 'submit']);
});
