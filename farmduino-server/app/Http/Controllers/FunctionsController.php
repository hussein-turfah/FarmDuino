<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FunctionsController extends Controller
{
    #this controller is for functions that are used in multiple controllers, or used several times in one controller
    
    // function for validating the entries
    public function entryValidate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    // function for generating a random string(salt)
    public function generateRandomString($length){
        $characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $characters_length = strlen($characters);
        $random_string = "";
        for($i = 0; $i < $length; $i++){
            $random_string .= $characters[rand(0,$characters_length-1)];
        }
        return $random_string;
    }
}
