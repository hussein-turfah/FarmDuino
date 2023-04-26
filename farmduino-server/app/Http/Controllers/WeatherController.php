<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    #a function to get the weather from an API
    public function getWeather(){
        $api_key = getenv('WEATHER_API_KEY');
    }
}