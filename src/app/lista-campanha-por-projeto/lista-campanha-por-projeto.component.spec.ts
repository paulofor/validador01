import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCampanhaPorProjetoComponent } from './lista-campanha-por-projeto.component';

describe('ListaCampanhaPorProjetoComponent', () => {
  let component: ListaCampanhaPorProjetoComponent;
  let fixture: ComponentFixture<ListaCampanhaPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCampanhaPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampanhaPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
