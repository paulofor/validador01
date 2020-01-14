import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFunilComponent } from './lista-funil.component';

describe('ListaFunilComponent', () => {
  let component: ListaFunilComponent;
  let fixture: ComponentFixture<ListaFunilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFunilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
