import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaValorConceitoPorProjetoComponent } from './lista-valor-conceito-por-projeto.component';

describe('ListaValorConceitoPorProjetoComponent', () => {
  let component: ListaValorConceitoPorProjetoComponent;
  let fixture: ComponentFixture<ListaValorConceitoPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaValorConceitoPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaValorConceitoPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
