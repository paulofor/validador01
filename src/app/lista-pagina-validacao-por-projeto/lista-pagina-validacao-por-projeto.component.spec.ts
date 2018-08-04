import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaginaValidacaoPorProjetoComponent } from './lista-pagina-validacao-por-projeto.component';

describe('ListaPaginaValidacaoPorProjetoComponent', () => {
  let component: ListaPaginaValidacaoPorProjetoComponent;
  let fixture: ComponentFixture<ListaPaginaValidacaoPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPaginaValidacaoPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPaginaValidacaoPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
