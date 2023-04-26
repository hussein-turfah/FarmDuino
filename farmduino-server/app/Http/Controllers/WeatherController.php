<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    #a function to get the weather from an API
    public function getWeather(){
        //get the API key and the longitude and latitude from the .env file
        $api_key = getenv('WEATHER_API_KEY');
        $longitude = getenv('LONGITUDE');
        $latitude = getenv('LATITUDE');
        //make the API call
        $url = "https://api.openweathermap.org/data/2.5/forecast?lat=".$latitude."&lon=".$longitude."&appid=".$api_key."&units=metric";
        // decode the response
        $response = file_get_contents($url);
        $response = json_decode($response);
        //return the details we need as an array
        $return_details = array();
        $return_details['icon'] = $response->list[0]->weather[0]->icon;
        $return_details['description'] = $response->list[0]->weather[0]->description;
        $return_details['temperature'] = $response->list[0]->main->temp;
        $return_details['date'] = date('l d M', strtotime($response->list[0]->dt_txt));
        $return_details['humidity'] = $response->list[0]->main->humidity;
        $return_details['wind_speed'] = $response->list[0]->wind->speed;
        return $return_details;
    }
}