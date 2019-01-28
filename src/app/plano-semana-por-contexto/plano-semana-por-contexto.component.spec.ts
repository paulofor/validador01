import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoSemanaPorContextoComponent } from './plano-semana-por-contexto.component';

describe('PlanoSemanaPorContextoComponent', () => {
  let component: PlanoSemanaPorContextoComponent;
  let fixture: ComponentFixture<PlanoSemanaPorContextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoSemanaPorContextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoSemanaPorContextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
