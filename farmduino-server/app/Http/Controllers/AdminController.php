<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //a function for listing all users
    public function listUsers(){
        $users = User::all();
        return response()->json($users, 200);
    }
    // list the sensors data of a certain user
    public function listUserSensorData(Request $request){
        $name = $request->name;
        $user_id = $request->user_id;
        $greenhouse_id = $request->greenhouse_id;

        // $sensor_data = Sensor::where('greenhouses_id', $greenhouse_id)->where('greenhouses_users_id', $user_id)->get();

        $sensor_data = Sensor::where('name', $name)->where('greenhouses_users_id', $user_id)->get();
    
        return response()->json($sensor_data, 200); 
    }
}
