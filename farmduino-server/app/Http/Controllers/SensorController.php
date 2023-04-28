<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use Illuminate\Http\Request;

class SensorController extends Controller
{
    # a function for listing sensor data
    public function listSensorData(){
        $sensorData = Sensor::all();
        return response()->json($sensorData, 200);
    }
}
