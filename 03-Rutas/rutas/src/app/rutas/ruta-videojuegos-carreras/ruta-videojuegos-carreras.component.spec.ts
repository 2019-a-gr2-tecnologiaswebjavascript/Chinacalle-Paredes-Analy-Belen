import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegosCarrerasComponent } from './ruta-videojuegos-carreras.component';

describe('RutaVideojuegosCarrerasComponent', () => {
  let component: RutaVideojuegosCarrerasComponent;
  let fixture: ComponentFixture<RutaVideojuegosCarrerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVideojuegosCarrerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegosCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
