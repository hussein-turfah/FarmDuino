<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
    public function greenhouse(){
        return $this->belongsTo(Greenhouse::class, 'greenhouses_id');
    }

}
