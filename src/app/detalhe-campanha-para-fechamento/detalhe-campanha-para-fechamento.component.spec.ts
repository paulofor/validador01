import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCampanhaParaFechamentoComponent } from './detalhe-campanha-para-fechamento.component';

describe('DetalheCampanhaParaFechamentoComponent', () => {
  let component: DetalheCampanhaParaFechamentoComponent;
  let fixture: ComponentFixture<DetalheCampanhaParaFechamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheCampanhaParaFechamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCampanhaParaFechamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
