import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPaginaValidacaoComponent } from './edicao-pagina-validacao.component';

describe('EdicaoPaginaValidacaoComponent', () => {
  let component: EdicaoPaginaValidacaoComponent;
  let fixture: ComponentFixture<EdicaoPaginaValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoPaginaValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoPaginaValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
