import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProjetoFinanceiroGeralComponent } from './lista-projeto-financeiro-geral.component';

describe('ListaProjetoFinanceiroGeralComponent', () => {
  let component: ListaProjetoFinanceiroGeralComponent;
  let fixture: ComponentFixture<ListaProjetoFinanceiroGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProjetoFinanceiroGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProjetoFinanceiroGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
