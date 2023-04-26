<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // change the email of the user
    public function changeEmail(Request $request){
        $functions_controller = new FunctionsController();

        $new_email = $functions_controller -> entryValidate($request ->email);
        $password = $functions_controller -> entryValidate($request ->password);

        //take the old email from jwt
        $user = Auth::user();
        $old_email = $user->email;

        //select the old email from the database and check if the hashed password is correct
        $user_db = User::where('email', $old_email)->first();
        if ($user_db && hash('sha256',$password.$user_db->salt) == $user_db->password) {
        }
    }
    
}