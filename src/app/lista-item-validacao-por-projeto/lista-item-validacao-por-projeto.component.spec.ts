import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemValidacaoPorProjetoComponent } from './lista-item-validacao-por-projeto.component';

describe('ListaItemValidacaoPorProjetoComponent', () => {
  let component: ListaItemValidacaoPorProjetoComponent;
  let fixture: ComponentFixture<ListaItemValidacaoPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItemValidacaoPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemValidacaoPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
