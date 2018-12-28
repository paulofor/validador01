import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCampanhaConceitoAtivoPorProjetoComponent } from './lista-campanha-conceito-ativo-por-projeto.component';

describe('ListaCampanhaConceitoAtivoPorProjetoComponent', () => {
  let component: ListaCampanhaConceitoAtivoPorProjetoComponent;
  let fixture: ComponentFixture<ListaCampanhaConceitoAtivoPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCampanhaConceitoAtivoPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampanhaConceitoAtivoPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
