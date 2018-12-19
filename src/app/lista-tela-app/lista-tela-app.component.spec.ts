import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTelaAppComponent } from './lista-tela-app.component';

describe('ListaTelaAppComponent', () => {
  let component: ListaTelaAppComponent;
  let fixture: ComponentFixture<ListaTelaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTelaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTelaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
