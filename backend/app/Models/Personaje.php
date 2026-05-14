<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personaje extends Model
{
    use HasFactory; // Testing
    protected $table = "personajes";
    protected $fillable = [
        'nombre',
        'tipo', 
        'poder', 
        'mundo'
        ];


    public function isPoderOK(): bool {
        return filter_var($this->poder, FILTER_VALIDATE_INT, [
            'options' => ['min_range' => 1, 'max_range' => 99],
        ]) !== false; 
    }
}
