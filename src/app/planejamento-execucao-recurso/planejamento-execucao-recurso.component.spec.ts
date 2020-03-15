import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoExecucaoRecursoComponent } from './planejamento-execucao-recurso.component';

describe('PlanejamentoExecucaoRecursoComponent', () => {
  let component: PlanejamentoExecucaoRecursoComponent;
  let fixture: ComponentFixture<PlanejamentoExecucaoRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanejamentoExecucaoRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoExecucaoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
