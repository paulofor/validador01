import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoExecucaoComponent } from './planejamento-execucao.component';

describe('PlanejamentoExecucaoComponent', () => {
  let component: PlanejamentoExecucaoComponent;
  let fixture: ComponentFixture<PlanejamentoExecucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanejamentoExecucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoExecucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
