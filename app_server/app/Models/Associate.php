<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Associate extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'address',
        'cardId',
        'birth',
        'isManager',
        'parts'
    ];


    function companies(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'company_associates', 'associate_id', 'company_id');
    }
}
