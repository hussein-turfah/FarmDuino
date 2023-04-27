<?php

namespace App\Http\Controllers;

use App\Models\Ticker_Element;
use Illuminate\Http\Request;

class TickerController extends Controller
{
    public function addTickerElement(Request $request){
        $ticker_elements = Ticker_Element::where('product_name', $request->product_name)->first();
    }
}
