<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use OpenAI;
use OpenAI\Client;

$guzzleClient = new \GuzzleHttp\Client(['verify' => false]);

class AIController extends Controller
{
    #This function (askAI())is used to ask the GPT-3 model about the plant recommended growth conditions, the function gets the plant name from the users table, and then 
    #sends it to the GPT-3 model, then the response returned carries an object of two objects, those objects, one of them is the recommended growth conditions 
    #this one goes directly to the front_end, and the other object is the Genus and species of the plant, this one goes to the getPlantImage function to get the image 
    #of the plant, which then goes to the front_end.  
    public function askAI(){
        // get plant name from users table
        $user = auth()->user();
        $plant_name = $user->plant_name;
        
        // $open_ai_key = getenv('OPENAI_API_KEY');
        // $client = OpenAI::client($open_ai_key);

        // $result = $client->completions()->create([
        //     'model' => 'text-davinci-003',
        //     'prompt' => 'PHP is',
        // ]);
        
        // return $result->choices[0]->text;
        $yourApiKey = getenv('OPENAI_API_KEY');
        $client = OpenAI::client($yourApiKey);

        $prompt = "The following is a conversation with an AI assistant. The assistant is  clever and an Agricultural engineer.
        Human: Hello, who are you?
        AI: I am an AI created by OpenAI. How can I help you today?
        Human: I am looking for a plant that can grow in my greenhouse.
        AI: I can help you with that. What is the name of the plant?
        Human: ";
        $prompt .= 'banana';
        $prompt .= "
        AI: The plant you are looking for is ";
        $result = $client->completions()->create([
            'model' => 'davinci',
            'prompt' => $prompt,
            'max_tokens' => 100,
            'temperature' => 0.1,
            'top_p' => 1,
            'n' => 1,
            'stream' => false,
            'logprobs' => null,
            'stop' => ["\n", " Human:", " AI:"],
        ]);
        return $result->choices[0]->text;

        // $open_ai_key = getenv('OPENAI_API_KEY');
        // $client = OpenAI::client($open_ai_key);
        
        // $messages = 
        //             "You are an agricultural engineer, 
        //             what are the temperature, humidity, light intensity 
        //             and soil moisture levels needed for a $plant_name plant to 
        //             grow inside a greenhouse? please be specific.
        //             sample output:
        //             {'ideal_conditions':{'temperature': xx-yy °C, 'humidity': xx-yy %, 
        //             'light intensity': xx-yy lux, 'soil moisture': xx-yy%.},
        //             {'Genus species': 'Genus species'}}
        //             please be straight to the point. and return json format.
        //             send a separate json with the most used genus-species of the plant.";
                

        //     $result = $client->completions()->create([
        //         'model' => 'davinci',
        //         'prompt' => $messages,
        //             'max_tokens' => 100,
        //             'temperature' => 0.2,
        //             // 'top_p' => 1,
        //             // 'n' => 1,
        //             // 'stream' => false,
        //             // 'logprobs' => null,
        //         ]);

        // return $result->choices[0]->text;

//         $response = $client->models()->list();

// $response->object; // 'list'

// foreach ($response->data as $result) {
//     $result->id; // 'text-davinci-003'
//     $result->object; // 'model'
//     // ...
// }

// $response->toArray(); // ['object' => 'list', 'data' => [...]]
        }
}
