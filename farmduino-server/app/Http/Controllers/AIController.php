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
                    {'ideal_conditions':{'temperature': xx-yy °C, 'humidity': xx-yy %, 
                    'light intensity': xx-yy lux, 'soil moisture': xx-yy%.},
                    {'Genus species': 'Genus species'}}
                    please be straight to the point. and return json format.
                    send a separate json with the most used genus-species of the plant." 
                ],
            ],
            'temperature' =>0.1,
            'max_tokens' => 500,
            'frequency_penalty' => 0,
            'presence_penalty' => 0,
        ]);
        $decoded_chat = json_decode($chat);
        $decoded_chat_content = json_decode($decoded_chat->choices[0]->message->content);
        // Get Content
        return $decoded_chat_content;
    }    
    public function getPlantNameFromUsersTable(){
        
    }
}
