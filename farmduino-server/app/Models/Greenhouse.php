<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Greenhouse extends Model
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
    public function user() :HasMany{
        return $this->hasMany(User::class, 'users_id');
    }
    public function logs():BelongsTo{
        return $this->belongsTo(Log::class,'greenhouses_id');
    }
    public function logsUserID():BelongsTo{
        return $this->belongsTo(Log::class,'greenhouses_users_id');
    }
    public function sensors():BelongsTo{
        return $this->belongsTo(Sensor::class,'greenhouses_id');
    }
    public function sensorsUserID():BelongsTo{
        return $this->belongsTo(Sensor::class,'greenhouses_users_id');
    }
    public function actuators():BelongsTo{
        return $this->belongsTo(Actuator::class,'greenhouses_id');
    }
    public function actuatorsUserID():BelongsTo{
        return $this->belongsTo(Actuator::class,'greenhouses_users_id');
    }
}
