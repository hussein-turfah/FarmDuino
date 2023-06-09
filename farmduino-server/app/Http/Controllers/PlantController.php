<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlantController extends Controller
{
    #function to get the plant image from trefle api using Genus and species generated by the GPT-3 model
    public function getPlantImage(){
        $trefle_api = getenv('TREFLE_API_KEY');
        $genus_species = $this->getPlantGenusSpecies();
        //split string into array
        $genus_species = explode(' ', $genus_species);
        $genus = $genus_species[0];
        $species = $genus_species[1];
        
        //Initialize new curl session, then set options, then excute it, and then close the session
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => "https://trefle.io/api/v1/plants/search?token=$trefle_api&q=$genus&q=$species",
            CURLOPT_RETURNTRANSFER => true,
        ]);
        $response = curl_exec($curl);
        curl_close($curl);
        $response = json_decode($response, true); //set to true becuase we want to return an array instead of an object
        $image_url = $response['data'][0]['image_url'];
        return response()->json(['image_url' => $image_url], 200);
    }
    
    #function to get the plant Genus and species from GPT-3 model output, and then return the plant image
    public function getPlantGenusSpecies(){
        $AI_Controller = new AIController(); 
        $query= $AI_Controller->askAI();
        
        $query = json_decode($query);
        return $query->Genus_species;
    }
}
