import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPalavraChavePorProjetoComponent } from './lista-palavra-chave-por-projeto.component';

describe('ListaPalavraChavePorProjetoComponent', () => {
  let component: ListaPalavraChavePorProjetoComponent;
  let fixture: ComponentFixture<ListaPalavraChavePorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPalavraChavePorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPalavraChavePorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
