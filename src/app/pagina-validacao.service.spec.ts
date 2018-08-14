import { TestBed, inject } from '@angular/core/testing';

import { PaginaValidacaoService } from './pagina-validacao.service';

describe('PaginaValidacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginaValidacaoService]
    });
  });

  it('should be created', inject([PaginaValidacaoService], (service: PaginaValidacaoService) => {
    expect(service).toBeTruthy();
  }));
});
