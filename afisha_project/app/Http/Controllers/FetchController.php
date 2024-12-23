<?php

namespace App\Http\Controllers;

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
}
