import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MarioService, Personaje } from './mario.service';

describe('MarioService', () => {
  let service: MarioService;
  let httpMock: HttpTestingController
  const apiURL = '/api/personajes';

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarioService]
    });

    service = TestBed.inject(MarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

   it('OK - crear servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('OK - obtener el listado de personajes', () => {
    const mockPersonajes = [
      { id: 1, nombre: 'Mario Mock', tipo: 'Heroe', nivel: 2},     
      { id: 2, nombre: 'Luigi Mock', tipo: 'Heroe', nivel: 3},
      { id: 3, nombre: 'Browser', tipo: 'Jefe', nivel: 30},
    ]

    service.getPersonajes().subscribe(personajes => {
      expect(personajes.length).toBe(3);
      expect(personajes[0].tipo).toBe('Heroe');
      expect(personajes[1].tipo).toBe('Heroe');
      expect(personajes[2].tipo).toBe('Jefe');
    });

    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe('GET');
    req.flush(mockPersonajes);
  });

  // TODO
  it('OK - crear personaje', () => {
    const nuevoPersonaje = {
      nombre: 'Peach',
      tipo: 'Heroe',
      nivel: 200
    }
    service.addPersonaje(nuevoPersonaje)
    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe('GET');
    req.flush(nuevoPersonaje);
  })

  // TODO
  it('OK - eliminar personaje', () => {
    const personajeEliminado = service.deletePersonaje('1')
    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe('GET');
    req.flush(personajeEliminado);
  })

  it('KO - El listado de personajes está vacío', () => {
    const mockPersonajesEmpty = []
    if (mockPersonajesEmpty.length < 1) {
      service.getPersonajes().subscribe({
        next: () => { throw new Error('No hay datos en el listado')},
        error: (err) => { expect(err.status).toBe(500); }
      });

      const req = httpMock.expectOne(apiURL);
      expect(req.request.method).toBe('GET');
      req.flush({ message: 'Errror interno' }, { status: 500, statusText: 'Server error' });
    }
  })
});


  /*it('should call createBook method - Success Response', () => {
    const createBookArg: CreateBook = {
      name: 'Test Book'
    };
    const createBookResponse = {
      data: {
        message:'Book Created Successfully'
      },
    };

    const response = cold('-a|', { a: createBookResponse });
    const expected = cold('-b|', { b: createBookResponse.data });
    http.post = jest.fn(() => response);

    expect(service.createBook(createBookArg)).toBeObservable(expected);
  }); */