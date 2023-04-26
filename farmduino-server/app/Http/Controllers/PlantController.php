<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlantController extends Controller
{
    #function to get all plants
    public function getPlants(){
        $api_key = getenv('TREFLE_API_KEY');
        $url = "https://trefle.io/api/v1/plants?token=$api_key";        
        //use the curl library to get data from api
        $ch = curl_init();
    }
}
