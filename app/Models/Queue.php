<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Queue extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'service_name',
        'service_code',
        'status',
        'position',
        'counter',
        'called_at',
        'served_at',
        'completed_at',
    ];

    public static function generateNumber($serviceCode)
    {
        $today = now()->format('Ymd');
        $count = self::whereDate('created_at', $today)->where('service_code', $serviceCode)->count();

        return $serviceCode . str_pad($count + 1, 3, '0', STR_PAD_LEFT);
    }
}
