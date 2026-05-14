import { TestBed } from '@angular/core/testing';

import { AddPersonajes } from './add-personajes';

describe('AddPersonajes', () => {
  let service: AddPersonajes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPersonajes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
