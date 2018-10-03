import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelacionamentoPorEntidadeComponent } from './lista-relacionamento-por-entidade.component';

describe('ListaRelacionamentoPorEntidadeComponent', () => {
  let component: ListaRelacionamentoPorEntidadeComponent;
  let fixture: ComponentFixture<ListaRelacionamentoPorEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRelacionamentoPorEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelacionamentoPorEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
