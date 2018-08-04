import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaValidacaoPorValorComponent } from './lista-validacao-por-valor.component';

describe('ListaValidacaoPorValorComponent', () => {
  let component: ListaValidacaoPorValorComponent;
  let fixture: ComponentFixture<ListaValidacaoPorValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaValidacaoPorValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaValidacaoPorValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
