import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecursoProdutoComponent } from './lista-recurso-produto.component';

describe('ListaRecursoProdutoComponent', () => {
  let component: ListaRecursoProdutoComponent;
  let fixture: ComponentFixture<ListaRecursoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRecursoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecursoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
