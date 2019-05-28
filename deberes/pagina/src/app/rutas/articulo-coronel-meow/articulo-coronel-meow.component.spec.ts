import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCoronelMeowComponent } from './articulo-coronel-meow.component';

describe('ArticuloCoronelMeowComponent', () => {
  let component: ArticuloCoronelMeowComponent;
  let fixture: ComponentFixture<ArticuloCoronelMeowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloCoronelMeowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCoronelMeowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
