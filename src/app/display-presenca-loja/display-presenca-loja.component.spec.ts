import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPresencaLojaComponent } from './display-presenca-loja.component';

describe('DisplayPresencaLojaComponent', () => {
  let component: DisplayPresencaLojaComponent;
  let fixture: ComponentFixture<DisplayPresencaLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPresencaLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPresencaLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
