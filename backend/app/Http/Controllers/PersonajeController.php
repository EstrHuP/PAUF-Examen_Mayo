<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personaje;

class PersonajeController extends Controller
{
    // GET - Listar
    public function index() {
        return Personaje::all();
    }

    // POST - Crear
    public function store(Request $request) {
        $messages = [
            'nombre.required' => 'necesitamos que ingrese el nombre y no puede ser menor a 3 caracteres',
            'tipo.required' => 'necesitamos que ingrese el tipo',
            'poder.required' => 'necesitamos que ingrese el poder y no puede ser vacío',
            'mundo.required' => 'necesitamos que ingrese el mundo',
        ];
        $request -> validate([
            'nombre' => 'required', 'min:3',
            'tipo' => 'required',
            'poder' => 'required', 'integer', 'min:1', 
            'mundo' => 'required'
        ], $messages);
        return Personaje::create($request->all());
    }
}
