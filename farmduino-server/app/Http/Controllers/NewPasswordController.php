<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NewPasswordController extends Controller
{
    // this function is for changing the password
    function newPassword(Request $request){
        //calling the functions controller    
        $functions_controller = new FunctionsController();
        
        $new_password = $functions_controller->entryValidate($request->password);

        $salt = $functions_controller -> generateRandomString(4);
        $hashed_password = hash('sha256',$new_password.$salt);

        $user = Auth::user();
        $user -> password = $hashed_password;
        $user ->salt = $salt;
        $user->save();

        return response()->json([
            "message" => "Password changed successfully"
        ], 200);
    }
}
