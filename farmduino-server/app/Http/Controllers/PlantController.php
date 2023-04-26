<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlantController extends Controller
{
    //function to get all plants
    public function getPlants(){
        $api_key = getenv('TREFLE_API_KEY');
    }
}
