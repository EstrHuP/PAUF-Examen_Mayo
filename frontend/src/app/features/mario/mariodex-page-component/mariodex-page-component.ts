import { Component } from '@angular/core';
import { MarioService, Personaje } from '../../../core/mario.service';
import { Observable } from 'rxjs';
import { NuevoPersonajeComponent } from '../nuevo-personaje-component/nuevo-personaje-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mariodex-page-component',
  imports: [
    CommonModule,
    NuevoPersonajeComponent
  ],
  templateUrl: './mariodex-page-component.html',
  styleUrl: './mariodex-page-component.scss',
})
export class MariodexPageComponent {

  // Obtener personajes
  personajes$!: Observable<Personaje[]>;

  //Control del modal
  isShowModal = false;

  constructor(private service: MarioService) {
    this.personajes$ = this.service.personajes$; // suscripción automática
  }

  openModal() {
    this.isShowModal = true;
  }

  closeModal() {
    this.isShowModal = false;
  }
}
