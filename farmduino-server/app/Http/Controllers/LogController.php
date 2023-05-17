<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogController extends Controller
{
    #a function that lists all logs
    public function listLogs(){
        $logs = Log::all();
        return response()->json($logs, 200);
    }

    public function listUserLogs(){
        $logs = Log::where('greenhouses_users_id', auth()->user()->id)->orderBy('id', 'desc')->get();
        return response()->json($logs, 200);
    }
}
