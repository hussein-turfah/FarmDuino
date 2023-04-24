<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    // function for logging in a user
    public function login(Request $request){    
        // create a new instance of the FunctionsController
        $functions_controller = new FunctionsController();

        $email = $functions_controller -> entryValidate($request ->email);
        $password = $functions_controller -> entryValidate($request ->password);
        
        // check if the email is already in use
        $verified_email = User::where('email', $email)->count();

        // if the email is in use, check if the password is correct
        if($verified_email){
            $user = User::where('email', $email)->first();

            $salt = $user->salt;
            $hashed_password = $user->password;
            $salt_password = $password.$salt;
            $hashed_salt_password = hash('sha256',$salt_password);

            // if the password is correct, return the user and the jwt token
            if($hashed_password == $hashed_salt_password){
                $jwt_token = JWTAuth::fromUser($user);

                return response() -> json([
                    "user" => $user,
                    "token" => $jwt_token
                ], 200);
            }return response()->json(["error"=> "Wrong Email or Password"], 401);
        }return response()->json(["error"=> "Wrong Email or Password"], 401);
    }
}
