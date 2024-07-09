<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    use HasFactory;

    protected $fillable = [
        'pack_name',
        'pack_description',
        'pack_price',
        'add-ons',
    ];

    function packFeatures(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(PackFeature::class);
    }
    function orders(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Order::class);
    }
}
