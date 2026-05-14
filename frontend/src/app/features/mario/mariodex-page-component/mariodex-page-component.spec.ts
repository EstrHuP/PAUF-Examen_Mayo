import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariodexPageComponent } from './mariodex-page-component';

describe('MariodexPageComponent', () => {
  let component: MariodexPageComponent;
  let fixture: ComponentFixture<MariodexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MariodexPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariodexPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
