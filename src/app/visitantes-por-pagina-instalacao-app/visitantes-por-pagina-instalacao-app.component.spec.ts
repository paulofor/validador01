import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesPorPaginaInstalacaoAppComponent } from './visitantes-por-pagina-instalacao-app.component';

describe('VisitantesPorPaginaInstalacaoAppComponent', () => {
  let component: VisitantesPorPaginaInstalacaoAppComponent;
  let fixture: ComponentFixture<VisitantesPorPaginaInstalacaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantesPorPaginaInstalacaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantesPorPaginaInstalacaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
