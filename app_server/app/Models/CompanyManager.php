<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyManager extends Model
{
    use HasFactory;

    protected $fillable = [
        'manager_id',
        'company_id'
    ];
}
