import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoFaseValidacaoComponent } from './projeto-fase-validacao.component';

describe('ProjetoFaseValidacaoComponent', () => {
  let component: ProjetoFaseValidacaoComponent;
  let fixture: ComponentFixture<ProjetoFaseValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoFaseValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoFaseValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
