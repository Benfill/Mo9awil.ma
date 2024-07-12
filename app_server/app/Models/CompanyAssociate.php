<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyAssociate extends Model
{
    use HasFactory;

    protected $fillable = [
        'associate_id',
        'company_id'
    ];
}
