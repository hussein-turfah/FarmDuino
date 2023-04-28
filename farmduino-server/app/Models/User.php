<?php

namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'gender',
        'dob',
        'favorite_color',
        'plant_name',
    ];
    public static $rules = [
        'first_name' => ['required', 'string', 'max:45'],
        'last_name' => ['required', 'string', 'max:45'],
        'email' => ['required', 'string', 'email', 'max:45', 'unique:users'],
        'password' => ['required', 'string', 'min:8'],
        'salt' => ['required', 'string', 'max:45'],
        'gender'=>[ 'required', 'string', 'max:10'],
        'dob'=>[ 'required', 'date'],
        'favorite_color'=>[ 'required', 'string', 'max:45'],
        'plant_name'=>[ 'required', 'string', 'max:45'],
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

     /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function greenhouses():BelongsTo{
        return $this->belongsTo(Greenhouse::class, 'users_id');
    }

}