import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPersonajeComponent } from './nuevo-personaje-component';

describe('NuevoPersonajeComponent', () => {
  let component: NuevoPersonajeComponent;
  let fixture: ComponentFixture<NuevoPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoPersonajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPersonajeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
