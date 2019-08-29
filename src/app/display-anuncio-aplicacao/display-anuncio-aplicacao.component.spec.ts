import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAnuncioAplicacaoComponent } from './display-anuncio-aplicacao.component';

describe('DisplayAnuncioAplicacaoComponent', () => {
  let component: DisplayAnuncioAplicacaoComponent;
  let fixture: ComponentFixture<DisplayAnuncioAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAnuncioAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAnuncioAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
