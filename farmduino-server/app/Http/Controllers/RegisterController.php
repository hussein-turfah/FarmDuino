<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\FunctionsController;

class RegisterController extends Controller
{
    // function for registering a new user
    function register(Request $request){
        // create a new instance of the FunctionsController
        $functions_controller = new FunctionsController();

        // validate the entries
        $first_name = $functions_controller->entryValidate($request->first_name);
        $last_name = $functions_controller->entryValidate($request->last_name);
        $email = $functions_controller->entryValidate($request->email);
        $password = $functions_controller->entryValidate($request->password);
        $gender = $functions_controller->entryValidate($request->gender);
        $dob = $functions_controller->entryValidate($request->dob);
        $favorite_color = $functions_controller->entryValidate($request->favorite_color);
        $plant_name = $functions_controller->entryValidate($request->plant_name);

        // create a salt, hash the password, lower all gender cases, and get the current date
        $salt = $functions_controller->generateRandomString(4);
        $hashed_password = hash('sha256', $password . $salt);
        $gender = ucfirst(strtolower($gender));
        
        $date = date("y-m-d");

        // check if the email is already in use
        $verified_email = User::where('email', $email)->first();


        // if the email is not in use, create a new user
        if (!$verified_email) {

            $user = new User;
            $user->first_name = $first_name;
            $user->last_name = $last_name;
            $user->email = $email;
            $user->password = $hashed_password;
            $user->salt = $salt;
            $user->gender = $gender;
            $user->dob = $dob;
            $user->favorite_color = $favorite_color;
            $user->is_deleted = 0;
            $user->is_admin = 0;
            $user->plant_name = $plant_name;
            $user->created_at = $date;
            $user->updated_at = $date;

            $user->save();

            return response()->json([
                "success" => true,
            ], 200);
        } else {
            return response()->json([
                "error" => "Email already exists!",
            ], 400);
        }
    }
}
