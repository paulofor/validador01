import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadProjetoComponent } from './lista-cad-projeto.component';

describe('ListaCadProjetoComponent', () => {
  let component: ListaCadProjetoComponent;
  let fixture: ComponentFixture<ListaCadProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCadProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCadProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
