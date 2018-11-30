import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorPalavrasComponent } from './navegador-palavras.component';

describe('NavegadorPalavrasComponent', () => {
  let component: NavegadorPalavrasComponent;
  let fixture: ComponentFixture<NavegadorPalavrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegadorPalavrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorPalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
