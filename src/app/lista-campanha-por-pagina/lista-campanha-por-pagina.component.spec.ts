import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCampanhaPorPaginaComponent } from './lista-campanha-por-pagina.component';

describe('ListaCampanhaPorPaginaComponent', () => {
  let component: ListaCampanhaPorPaginaComponent;
  let fixture: ComponentFixture<ListaCampanhaPorPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCampanhaPorPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampanhaPorPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
