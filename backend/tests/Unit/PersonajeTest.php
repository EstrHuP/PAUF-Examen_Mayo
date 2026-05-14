<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Personaje;

class PersonajeTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $this->assertTrue(true);
    }

    public function test_crea_personaje(): void {
        //TODO
    }


    public function test_valida_datos(): void {
        $this->assertTrue((new Personaje(['poder' => 1]))->isPoderOK()); //true
        $this->assertTrue((new Personaje(['poder' => 99]))->isPoderOK()); //true
        $this->assertFalse((new Personaje(['poder' => 0]))->isPoderOK()); //false
        $this->assertFalse((new Personaje(['poder' => 500]))->isPoderOK()); //false

    }
}