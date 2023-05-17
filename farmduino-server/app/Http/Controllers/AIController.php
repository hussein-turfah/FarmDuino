<?php

namespace App\Http\Controllers;

// use OpenAI;
// use OpenAI\Client;
use Orhanerday\OpenAi\OpenAi;

$guzzleClient = new \GuzzleHttp\Client(['verify' => false]);

class AIController extends Controller
{
    #This function (askAI())is used to ask the GPT-3 model about the plant recommended growth conditions, the function gets the plant name from the users table, and then 
    #sends it to the GPT-3 model, then the response returned carries an object of two objects, those objects, one of them is the recommended growth conditions 
    #this one goes directly to the front_end, and the other object is the Genus and species of the plant, this one goes to the getPlantImage function to get the image 
    #of the plant, which then goes to the front_end.  
    public function askAI()
    {
        // get plant name from users table
        $user = auth()->user();
        $plant_name = $user->plant_name;

        $open_ai_key = getenv('OPENAI_API_KEY');
        $open_ai = new OpenAi($open_ai_key);

        $complete = $open_ai->chat([
            'model' => 'gpt-3.5-turbo',
            'messages' => [

                [
                    "role" => "user",
                    "content" => "
                        You are an Agricultural Engineer.        
                        sample output for $plant_name:
                        {'ideal_conditions':{'temperature': x-y °C, 'humidity': x-y %, 
                        'light_intensity': x-y lux, 'soil_moisture': x-y%.},
                        {'Genus_species': 'Genus species'},
                        {'sentences': {
                            temperature: 'one sentence about temperature',
                            humidity: 'one sentence about humidity',
                            light_intensity: 'one sentence about light intensity',
                            soil_moisture: 'one sentence about soil moisture',
                            }}
                    }
                        Just send the json values and make everything as json.
                    "
                ],
            ],
            'temperature' => 0.1,
            'max_tokens' => 2000,
            'frequency_penalty' => 0,
            'presence_penalty' => 0,
        ]);

        $complete = json_decode($complete);

        if (isset($complete->choices[0]->message->content)) {
            return $complete->choices[0]->message->content;
        } else {
            return $complete->error->message;
        }
    }
}
