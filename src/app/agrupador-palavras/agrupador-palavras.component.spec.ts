import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupadorPalavrasComponent } from './agrupador-palavras.component';

describe('AgrupadorPalavrasComponent', () => {
  let component: AgrupadorPalavrasComponent;
  let fixture: ComponentFixture<AgrupadorPalavrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrupadorPalavrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupadorPalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
