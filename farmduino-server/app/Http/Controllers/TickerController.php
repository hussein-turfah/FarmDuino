<?php

namespace App\Http\Controllers;

use App\Models\Ticker_Element;
use Illuminate\Http\Request;

class TickerController extends Controller
{
    public function addTickerElement(Request $request){
        $ticker_elements = Ticker_Element::where('product_name', $request->product_name)->first();
        if(!$ticker_elements){
            $ticker_elements = new Ticker_Element;
            $ticker_elements->product_name = $request->product_name;
            $ticker_elements->price = $request->price;
            $ticker_elements->save();
            return response()->json($ticker_elements, 200);
        }else{
            // change the price of the ticker element
            $ticker_elements->price = $request->price; 
            $ticker_elements->save();
            return response()->json($ticker_elements, 200);
        }
    }
}
