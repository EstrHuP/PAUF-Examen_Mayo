import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import mockPersonajes from '../../../../testing/fixtures/personajes.json';
import { PersonajesService } from './personajes';

describe('Personajes', () => {
  let service: PersonajesService;
  let httpMock: HttpTestingController;
  const apiURL = '/api/personajes';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonajesService]
    });

    service = TestBed.inject(PersonajesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

    it('debe obtener el listado de personajes', () => {
    service.getPersonajes().subscribe(personajes => {
      expect(personajes.length).toBe(2); //depende de los elementos que tenga añadido el mock
      expect(personajes[0].nombre).toBe('Mario Bros'); // primer elemento del json
      expect(personajes[1].nombre).toBe('Luigi Bros'); // segundo elemento del json
    });

    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe('GET');
    req.flush(mockPersonajes);
  });

  it('error 500 al obtener personajes', () => {
    service.getPersonajes().subscribe({
      next: () => { throw new Error('No debe devolver datos si el servidor falla') },
      error: (err) => { expect(err.status).toBe(500); }
    });

    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe('GET');
    req.flush({ message: 'Error interno' }, { status: 500, statusText: 'Server Error' });
  });
});
