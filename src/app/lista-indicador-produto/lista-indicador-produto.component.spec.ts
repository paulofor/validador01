import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIndicadorProdutoComponent } from './lista-indicador-produto.component';

describe('ListaIndicadorProdutoComponent', () => {
  let component: ListaIndicadorProdutoComponent;
  let fixture: ComponentFixture<ListaIndicadorProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIndicadorProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIndicadorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
