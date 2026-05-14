<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonajeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// MARK: - Personajes
Route::get('personajes', [PersonajeController::class, 'index']); // listar todos
Route::post("personajes", [PersonajeController::class, 'store']); // crear
