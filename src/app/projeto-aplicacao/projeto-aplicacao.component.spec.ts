import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoAplicacaoComponent } from './projeto-aplicacao.component';

describe('ProjetoAplicacaoComponent', () => {
  let component: ProjetoAplicacaoComponent;
  let fixture: ComponentFixture<ProjetoAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
