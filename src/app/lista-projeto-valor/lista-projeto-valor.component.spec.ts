import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProjetoValorComponent } from './lista-projeto-valor.component';

describe('ListaProjetoValorComponent', () => {
  let component: ListaProjetoValorComponent;
  let fixture: ComponentFixture<ListaProjetoValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProjetoValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProjetoValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
