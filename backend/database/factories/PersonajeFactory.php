<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Personaje;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Personaje>
 */
class PersonajeFactory extends Factory
{
    protected $model = Personaje::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->name(),
            'tipo' => $this->faker->randomElement(['Heroe', 'Villano', 'Jefe']),
            'poder' => $this->faker->numberBetween(1, 99),
            'mundo' => $this->faker->word(),
        ];
    }
}
