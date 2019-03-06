import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemValidacaoProjetoComponent } from './lista-item-validacao-projeto.component';

describe('ListaItemValidacaoProjetoComponent', () => {
  let component: ListaItemValidacaoProjetoComponent;
  let fixture: ComponentFixture<ListaItemValidacaoProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItemValidacaoProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemValidacaoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
