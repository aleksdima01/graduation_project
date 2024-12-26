<?php

use App\Http\Controllers\FetchController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/spb', function () {
    return Inertia::render('ShowAfishaInfo', [
        'city' => 'spb'
    ]);
})->name('spb');
Route::get('/msk', function () {
    return Inertia::render('ShowAfishaInfo', [
        'city' => 'msk'
    ]);
})->name('msk');
Route::get('/krd', function () {
    return Inertia::render('ShowAfishaInfo', [
        'city' => 'krd'
    ]);
})->name('krd');
Route::get('/sochi', function () {
    return Inertia::render('ShowAfishaInfo', [
        'city' => 'sochi'
    ]);
})->name('sochi');



Route::redirect('/', '/spb');

// Route::get('/', function () {
//     return Inertia::render('ShowAfishaInfo', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'city' => 'spb',
//     ]);
// });
// Route::get('{reactRoutes?}/{id?}', function () {
//     return Inertia::render('Stub');
// })->whereIn('reactRoutes', ['spb', 'msk', 'krd', 'sochi'])->whereNumber('id');

Route::get('{id?}', function ($id) {
    return Inertia::render('FetchEvent', [
        'id' => $id
    ]);
})->whereNumber('id')->name('eachEvent');

Route::get('api/getfetchinfo', [FetchController::class, 'getFetchInfo']);
Route::get('api/fetcheachevent', [FetchController::class, 'fetchEachEvent']);
Route::get('api/fetchfavorites', [FetchController::class, 'fetchFavorites']);
Route::get('api/savefavorites', [FetchController::class, 'saveFavorites']);
Route::get('api/deletefavorites', [FetchController::class, 'deleteFavorites']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
