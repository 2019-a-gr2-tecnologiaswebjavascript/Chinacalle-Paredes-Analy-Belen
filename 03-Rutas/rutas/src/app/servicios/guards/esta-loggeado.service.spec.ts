import { TestBed } from '@angular/core/testing';

import { EstaLoggeadoService } from './esta-loggeado.service';

describe('EstaLoggeadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstaLoggeadoService = TestBed.get(EstaLoggeadoService);
    expect(service).toBeTruthy();
  });
});
