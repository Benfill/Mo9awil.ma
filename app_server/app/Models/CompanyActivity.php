<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        "activity_id",
        "company_id"
    ];
}
