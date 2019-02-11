import { TestBed, inject } from '@angular/core/testing';

import { ProcessoNegocioService } from './processo-negocio.service';

describe('ProcessoNegocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessoNegocioService]
    });
  });

  it('should be created', inject([ProcessoNegocioService], (service: ProcessoNegocioService) => {
    expect(service).toBeTruthy();
  }));
});
