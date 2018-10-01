import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtributoPorEntidadeComponent } from './lista-atributo-por-entidade.component';

describe('ListaAtributoPorEntidadeComponent', () => {
  let component: ListaAtributoPorEntidadeComponent;
  let fixture: ComponentFixture<ListaAtributoPorEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAtributoPorEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtributoPorEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
