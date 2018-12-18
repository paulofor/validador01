import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTelaAppPorProjetoComponent } from './lista-tela-app-por-projeto.component';

describe('ListaTelaAppPorProjetoComponent', () => {
  let component: ListaTelaAppPorProjetoComponent;
  let fixture: ComponentFixture<ListaTelaAppPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTelaAppPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTelaAppPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
