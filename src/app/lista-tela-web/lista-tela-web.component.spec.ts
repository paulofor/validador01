import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTelaWebComponent } from './lista-tela-web.component';

describe('ListaTelaWebComponent', () => {
  let component: ListaTelaWebComponent;
  let fixture: ComponentFixture<ListaTelaWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTelaWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTelaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
