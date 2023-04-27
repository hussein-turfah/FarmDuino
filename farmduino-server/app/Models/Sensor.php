<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'value',
     ];
    public static $rules = [
        'name' => ['required', 'string', 'max:45'],
        'value' => ['required', 'string', 'max:45'],
    ];
    public function greenhouse(){
        return $this->belongsTo(Greenhouse::class, 'greenhouses_id');
    }
}
