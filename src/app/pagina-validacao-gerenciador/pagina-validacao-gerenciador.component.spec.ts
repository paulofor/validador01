import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaValidacaoGerenciadorComponent } from './pagina-validacao-gerenciador.component';

describe('PaginaValidacaoGerenciadorComponent', () => {
  let component: PaginaValidacaoGerenciadorComponent;
  let fixture: ComponentFixture<PaginaValidacaoGerenciadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaValidacaoGerenciadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaValidacaoGerenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
