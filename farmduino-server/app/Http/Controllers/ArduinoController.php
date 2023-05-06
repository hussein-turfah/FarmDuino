<?php

namespace App\Http\Controllers;

use App\Models\Actuator;
use App\Models\Greenhouse;
use App\Models\Sensor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
 
$response = Http::get('http://example.com');

class ArduinoController extends Controller
{
    public function recieveData(Request $request){

        $data = json_decode($request->getContent(), true); 

        $greenhouses_id = 3;
        $greenhouses_users_id = 21;
        
        $sensors = [
            ['name' => 'temperature', 'value' => $data['temperature']],
            ['name' => 'humidity', 'value' => $data['humidity']],
            ['name' => 'soil_moisture', 'value' => $data['soil_moisture']],
            ['name' => 'light_intensity', 'value' => $data['light_intensity']]
        ];
        
        foreach ($sensors as $sensorData) {
            $sensor = new Sensor();
            $sensor->greenhouses_id = $greenhouses_id;
            $sensor->greenhouses_users_id = $greenhouses_users_id;
            $sensor->name = $sensorData['name'];
            $sensor->value = $sensorData['value'];
            $sensor->save();
        }
        
        return response()->json([
            'message' => 'Data received'
        ], 200);

    }

    public function userReceiveData(){
        $data = Sensor::where('greenhouses_users_id', auth()->user()->id)
        ->orderBy('created_at', 'asc')
        ->take(40)
        ->get();

        return response()->json([
            'data' => $data
        ], 200);
    }

 public function userReceiveLastData(){
    $data = Sensor::where('greenhouses_users_id', auth()->user()->id)
    ->get();
    $lastData = [];

    foreach ($data as $sensor) {
        $lastData[$sensor->name] = $sensor->value;
    }

    return response()->json([
        'data' => $lastData
    ], 200);
}
public function userSendConfigurations(Request $request){
    $data = json_decode($request->getContent(), true);

    $greenhouses_id = Greenhouse::where('users_id', auth()->user()->id)->first()->id;

    if($data['fans_switch_state'] === false) $fans = 'off';
    else $fans = $data['fans_slider_value'];

    if($data['lights_switch_state'] === false) $lights = 'off';
    else $lights = $data['lights_slider_value'];

    $configs=[
        ['name' => 'fans', 'status' => $fans],
        ['name'=> 'lights', 'status'=> $lights]
    ];

    foreach ($configs as $config) {
        $actuator = new Actuator();
        $actuator->greenhouses_id = $greenhouses_id;
        $actuator->greenhouses_users_id = auth()->user()->id;
        $actuator->name = $config['name'];
        $actuator->status = $config['status'];
        $actuator->save();
    }
    
    return response()->json([
        'message' => 'Data received'
    ], 200);
}

    public function sendToArduino()
    {
        $data = Actuator::where('greenhouses_users_id', auth()->user()->id)
            ->orderBy('created_at', 'desc')
            ->take(2)
            ->get();

        $fans = $data[0]->status;
        $lights = $data[1]->status;

        
        $url = 'http://localhost:6000/arduino/';
        $ch = curl_init($url);
        $user_data = [
            ['name' => 'fans', 'status' => $fans],
            ['name' => 'lights', 'status' => $lights]
        ];
        $json_data = json_encode($user_data);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);

        return response()->json([
            'data' => $result, 
            'message' => 'Data sent',
        ], 200);
    }
}
