<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    #a function to get the weather from an API
    public function getWeather(){
        $api_key = getenv('WEATHER_API_KEY');
        $longitude = getenv('LONGITUDE');
        $latitude = getenv('LATITUDE');
        $url = "https://api.openweathermap.org/data/2.5/forecast?lat=".$latitude."&lon=".$longitude."&appid=".$api_key."&units=metric";
        $response = file_get_contents($url);
        return $response;
    }
}