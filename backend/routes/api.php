<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RoomController;
use App\Http\Controllers\ContactController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/status', function () {
    return response()->json([
        'status' => 'online',
        'message' => 'Colson Hotel API is running',
        'timestamp' => now()->toIso8601String(),
    ]);
});

// Hotel API Routes
Route::get('/rooms', [RoomController::class, 'index']);
Route::get('/rooms/{slug}', [RoomController::class, 'show']);
Route::post('/contacts', [ContactController::class, 'store']);


