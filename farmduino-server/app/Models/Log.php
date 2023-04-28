<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Log extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'component',
        'message',
    ];
    public function greenhouse(): HasMany{
        return $this->hasMany(Greenhouse::class, 'greenhouses_id');
    }
    public function greenhouseUserID(): HasMany{
        return $this->hasMany(Greenhouse::class, 'greenhouses_users_id');
    }

}
