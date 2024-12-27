<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FetchController extends Controller
{
    public function getFetchInfo(Request $request)
    {
        $response = Http::get("https://kudago.com/public-api/v1.4/events/?lang=&fields=id,dates,publication_date,title,short_title,place,location,images,site_url&expand=&order_by=-publication_date&text_format=&ids=&page={$request->page}&page_size=21&location={$request->location}&actual_since={$request->actual_since}");
        return $response->json();
    }
    public function fetchEachEvent(Request $request)
    {
        $response = Http::get("https://kudago.com/public-api/v1.4/events/{$request->id}/?lang=&fields=");
        return $response->json();
    }
    public function fetchFavorites(Request $request)
    {
        $user = User::findOrFail($request->user);
        $favorites = $user->favorites;
        $stringFavorites = implode(",", $favorites);
        $response = Http::get("https://kudago.com/public-api/v1.4/events/?lang=&fields=id,dates,publication_date,title,short_title,place,location,images,site_url&ids={$stringFavorites}");
        return $response->json();
    }
    public function saveFavorites(Request $request)
    {
        $user = User::findOrFail($request->user);
        if (collect($user->favorites)->contains($request->favoriteid)) {
            return "Элемент уже в избранном";
        } else {
            $user->favorites = (collect($user->favorites)->push($request->favoriteid));
            $user->save();
            return $user->favorites;
        }
    }
    public function deleteFavorites(Request $request)
    {
        $user = User::findOrFail($request->user);
        $favorites = $user->favorites;
        $newFavorites = collect($favorites)->filter(function ($value) use ($request) {
            return $value !== $request->favoriteid;
        });
        $user->favorites = $newFavorites;
        $user->save();
        return $user->favorites;
    }
}
