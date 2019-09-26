import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemValorPorProjetoComponent } from './lista-item-valor-por-projeto.component';

describe('ListaItemValorPorProjetoComponent', () => {
  let component: ListaItemValorPorProjetoComponent;
  let fixture: ComponentFixture<ListaItemValorPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItemValorPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemValorPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
