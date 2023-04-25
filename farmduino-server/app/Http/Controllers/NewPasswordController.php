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
    // this function is for checking the user's favorite color as a security measure
    function checkColor(Request $request){
        $functions_controller = new functionscontroller();

        $email = $functions_controller -> entryValidate($request ->email);
        $color = $functions_controller -> entryValidate($request->favorite_color);
        
        $user = User::where('email', $email)->first();
        if (!$user||$user->favorite_color !== $color) {
            return response()->json([
                'error' => 'Wrong Email or Favorite Color'
            ], 401);
        }else{
            $jwt_token = Auth::fromUser($user);
            return response()->json([
                'token' => $jwt_token
            ], 200);
        }
    }
}
