<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //a function for listing all users
    public function listUsers(){
        $users = User::all();
        return response()->json($users, 200);
    }
}
