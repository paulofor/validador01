import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaValorConceitoComponent } from './lista-valor-conceito.component';

describe('ListaValorConceitoComponent', () => {
  let component: ListaValorConceitoComponent;
  let fixture: ComponentFixture<ListaValorConceitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaValorConceitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaValorConceitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
