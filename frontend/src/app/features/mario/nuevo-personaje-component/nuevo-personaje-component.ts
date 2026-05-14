import { Component, EventEmitter, Output } from '@angular/core';
import { MarioService } from '../../../core/mario.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-personaje-component',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './nuevo-personaje-component.html',
  styleUrl: './nuevo-personaje-component.scss',
})
export class NuevoPersonajeComponent {

  @Output() closeModal = new EventEmitter<void>();

  newPersonaje = {
    nombre: '',
    tipo: '',
    nivel: 0
  }

  // 2. Constructor
  constructor(private service: MarioService) {}


  addPersonaje(form: NgForm) {
    if (form.invalid) return;

    this.service.addPersonaje(this.newPersonaje).subscribe({
      next: (personaje) => {
        alert("Personaje registrado correctamente en MarioDex");
        this.closeModal.emit();
        form.resetForm();
      },
      error: (err) => {
        console.error("Error registrando personaje: ", err);
        alert("No se ha podido registrar el personaje en MarioDex");
      }
    });
  }
}