<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use Illuminate\Http\Request;

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

}
