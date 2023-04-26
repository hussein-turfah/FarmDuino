<?php

namespace App\Http\Controllers;

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
    }
    
}