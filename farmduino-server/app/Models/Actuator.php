<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actuator extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'status',
     ];
    public static $rules = [
        'name' => ['required', 'string', 'max:45'],
        'status' => ['required', 'string', 'max:45'],
    ];
}
