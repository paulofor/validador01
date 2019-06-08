import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesPorPaginaValidacaoWebComponent } from './visitantes-por-pagina-validacao-web.component';

describe('VisitantesPorPaginaValidacaoWebComponent', () => {
  let component: VisitantesPorPaginaValidacaoWebComponent;
  let fixture: ComponentFixture<VisitantesPorPaginaValidacaoWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantesPorPaginaValidacaoWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantesPorPaginaValidacaoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
