import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface Personaje {
  _id?: string,
  nombre: string,
  tipo: string,
  nivel: number,
}

@Injectable({ providedIn: 'root' })
export class MarioService {
  private apiURL = '/api/personajes';

  private _personajes$ = new BehaviorSubject<Personaje[]>([]);
  public personajes$ = this._personajes$.asObservable();

  constructor(private http: HttpClient) {}

  getPersonajes() {
    return this.http.get<Personaje[]>(this.apiURL);
  }

  addPersonaje(personaje: Personaje): Observable<any> {
    return this.http.post<Personaje>(this.apiURL, personaje)
    .pipe(
      tap(newPersonaje => {
        const current = this._personajes$.getValue();
        this._personajes$.next([...current, newPersonaje]);
      })
    );
  }

  deletePersonaje(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}