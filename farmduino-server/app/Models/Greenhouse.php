<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Greenhouses extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'users_id',
    ];
    public function user(){
        return $this->belongsTo(User::class, 'users_id');
    }
    public function logs(){
        return $this->hasMany(Log::class,'greenhouses_id');
    }
    public function logsUserID(){
        return $this->hasMany(Log::class,'greenhouses_users_id');
    }
    public function sensors(){
        return $this->hasMany(Sensor::class,'greenhouses_id');
    }
    public function sensorsUserID(){
        return $this->hasMany(Sensor::class,'greenhouses_users_id');
    }
}
