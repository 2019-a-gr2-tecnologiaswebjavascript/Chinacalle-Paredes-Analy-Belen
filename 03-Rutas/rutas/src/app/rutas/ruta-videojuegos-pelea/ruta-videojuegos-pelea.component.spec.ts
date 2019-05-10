import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegosPeleaComponent } from './ruta-videojuegos-pelea.component';

describe('RutaVideojuegosPeleaComponent', () => {
  let component: RutaVideojuegosPeleaComponent;
  let fixture: ComponentFixture<RutaVideojuegosPeleaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVideojuegosPeleaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegosPeleaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
