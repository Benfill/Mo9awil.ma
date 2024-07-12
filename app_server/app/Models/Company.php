<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'companyName',
        'companyAddress',
        'capital',
        'legalStatus',
        'signing',
        'city_id',
        'user_id',
        'status'
    ];

    function associates(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Associate::class, 'company_associates', 'company_id', 'associate_id');
    }

    function managers(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Manager::class, 'company_managers', 'company_id', 'manager_id');
    }

    function activities(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Activity::class, 'company_activities', 'company_id', 'activity_id');
    }

    function negativeCertificate(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(NegativeCertificate::class);
    }

    function city(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
