<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlantController extends Controller
{
    #function to get the plant image from trefle api using Genus and species generated by the GPT-3 model
    public function getPlantImage(){
        $trefle_api = getenv('TREFLE_API_KEY');
        $genus_species = 'Musa acuminata';
        //split string into array
        $genus_species = explode(' ', $genus_species);
        $genus = $genus_species[0];
        $species = $genus_species[1];

        echo $genus;
        echo $species;
        return response()->json($genus_species);
    }

}
