<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
    public function greenhouse(): HasMany{
        return $this->hasMany(Greenhouse::class, 'greenhouses_id');
    }
    public function greenhouseUserID(): HasMany{
        return $this->hasMany(Greenhouse::class, 'greenhouses_users_id');
    }
}
