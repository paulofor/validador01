import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorPaginaValidacaoComponent } from './gerenciador-pagina-validacao.component';

describe('GerenciadorPaginaValidacaoComponent', () => {
  let component: GerenciadorPaginaValidacaoComponent;
  let fixture: ComponentFixture<GerenciadorPaginaValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorPaginaValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorPaginaValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
