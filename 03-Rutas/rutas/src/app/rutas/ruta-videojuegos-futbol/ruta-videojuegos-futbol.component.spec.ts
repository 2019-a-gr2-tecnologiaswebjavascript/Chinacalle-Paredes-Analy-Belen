import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegosFutbolComponent } from './ruta-videojuegos-futbol.component';

describe('RutaVideojuegosFutbolComponent', () => {
  let component: RutaVideojuegosFutbolComponent;
  let fixture: ComponentFixture<RutaVideojuegosFutbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVideojuegosFutbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegosFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
