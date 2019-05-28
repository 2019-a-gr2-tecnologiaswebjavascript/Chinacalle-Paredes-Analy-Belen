import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloGatoNerviosoComponent } from './articulo-gato-nervioso.component';

describe('ArticuloGatoNerviosoComponent', () => {
  let component: ArticuloGatoNerviosoComponent;
  let fixture: ComponentFixture<ArticuloGatoNerviosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloGatoNerviosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloGatoNerviosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
