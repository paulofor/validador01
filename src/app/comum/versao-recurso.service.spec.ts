import { TestBed, inject } from '@angular/core/testing';

import { VersaoRecursoService } from './versao-recurso.service';

describe('VersaoRecursoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VersaoRecursoService]
    });
  });

  it('should be created', inject([VersaoRecursoService], (service: VersaoRecursoService) => {
    expect(service).toBeTruthy();
  }));
});
