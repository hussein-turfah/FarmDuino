<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;

class WeatherController extends Controller
{
    #a function to get the weather from an API
    public function getWeather(){
        //get the API key and the longitude and latitude from the .env file
        $api_key = getenv('WEATHER_API_KEY');
        $longitude = getenv('LONGITUDE');
        $latitude = getenv('LATITUDE');
        //make the API call
        $url = "https://api.openweathermap.org/data/2.5/forecast?lat=".$latitude."&lon=".$longitude."&appid=".$api_key."&units=metric&cnt=3";
        // decode the response
        $response = file_get_contents($url);
        $response = json_decode($response);;
        //return the details we need as an array
        $details = array();
        foreach ($response->list as $item) {
            // create a new array for each item with the required properties
            $forecast = array(
                'icon' => $item->weather[0]->icon,
                'description' => $item->weather[0]->description,
                'temperature' => $item->main->temp,
                'date' => date('l d M', strtotime($item->dt_txt)),
                'humidity' => $item->main->humidity,
                'wind_speed' => $item->wind->speed
            );
            // add the new item to the $details array
            $details[] = $forecast;
        }
        return response()->json($details, 200);
    }
}