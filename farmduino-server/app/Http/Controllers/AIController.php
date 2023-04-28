<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Orhanerday\OpenAi\OpenAi;

class AIController extends Controller
{
    public function askAI(){
        $open_ai_key = getenv('OPENAI_API_KEY');
        $open_ai = new OpenAi($open_ai_key);
        $chat = $open_ai->chat([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                [
                    "role" => "system",
                    "content" => "You are an agricultural engineer, 
                    what are the temperature, humidity, light intensity 
                    and soil moisture levels needed for a banana plant to 
                    grow inside a greenhouse? please be specific.
                    sample output:
                    temperature: xx-yy °C, humidity: xx-yy %, 
                    light intensity: xx-yy lux, soil moisture: xx-yy%. 
                    please be straight to the point. and return json format." 
                ],
            ],
            'temperature' => 1.0,
            'max_tokens' => 4000,
            'frequency_penalty' => 0,
            'presence_penalty' => 0,
         ]);
         
         
         var_dump($chat);
         echo "<br>";
         echo "<br>";
         echo "<br>";
         // decode response
         $d = json_decode($chat);
         // Get Content
         echo($d->choices[0]->message->content);
    }    
}
