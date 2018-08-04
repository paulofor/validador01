import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaValorPorProjetoComponent } from './lista-valor-por-projeto.component';

describe('ListaValorPorProjetoComponent', () => {
  let component: ListaValorPorProjetoComponent;
  let fixture: ComponentFixture<ListaValorPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaValorPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaValorPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
