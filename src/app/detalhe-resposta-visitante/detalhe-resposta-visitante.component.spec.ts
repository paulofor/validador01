import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRespostaVisitanteComponent } from './detalhe-resposta-visitante.component';

describe('DetalheRespostaVisitanteComponent', () => {
  let component: DetalheRespostaVisitanteComponent;
  let fixture: ComponentFixture<DetalheRespostaVisitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRespostaVisitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRespostaVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
