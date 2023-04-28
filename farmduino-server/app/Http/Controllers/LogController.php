<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
{
    #a function that lists all logs
    public function listLogs(){
        $logs = Log::all();
        return response()->json($logs, 200);
    }
}
