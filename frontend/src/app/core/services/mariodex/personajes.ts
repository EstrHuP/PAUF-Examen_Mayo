import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Personaje {
  nombre: string;
  tipo: string,
  nivel: number;
}

@Injectable({ providedIn: 'root' })
export class PersonajesService {
  private apiURL = '/api/personajes';

  constructor(private http: HttpClient) {}

  getPersonajes() {
    return this.http.get<Personaje[]>(this.apiURL);
  }
}
