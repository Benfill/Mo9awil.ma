<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NegativeCertificate extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'firstName',
        'secondName',
        'thirdName',
        'status',
    ];

    function company(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
