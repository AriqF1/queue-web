<?php

use App\Http\Controllers\DisplayController;
use App\Http\Controllers\KioskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/display-queue', [DisplayController::class, 'index'])->name('display-queue');
Route::get('/kiosk', [KioskController::class, 'index'])->name('kiosk');
Route::post('/kiosk', [KioskController::class, 'store'])->name('kiosk.store');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
