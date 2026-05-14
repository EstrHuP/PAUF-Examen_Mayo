<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Personaje;

class PersonajeApiTest extends TestCase {
    use RefreshDatabase;
    public function test_api_return_lista_personajes() {
        Personaje::factory()->create(['nombre'=>'Mario Bross', 'tipo'=>'Heroe', 'poder'=>'Fuego', 'mundo'=>'arcoiris']);
        $response = $this->getJson('/api/personajes');
        $response->assertStatus(200)
                ->assertJsonFragment(['nombre'=>'Mario Bross'])
                ->assertJsonStructure([
                    '*' => ['id', 'nombre', 'tipo', 'poder', 'mundo'],
                ]);
    }
}
