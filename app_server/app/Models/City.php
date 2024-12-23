<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $fillable = [
        'activity_name'
    ];

    function company(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Company::class);
    }
}
