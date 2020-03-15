import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoSemanaPorContextoRecursoComponent } from './plano-semana-por-contexto-recurso.component';

describe('PlanoSemanaPorContextoRecursoComponent', () => {
  let component: PlanoSemanaPorContextoRecursoComponent;
  let fixture: ComponentFixture<PlanoSemanaPorContextoRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoSemanaPorContextoRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoSemanaPorContextoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
