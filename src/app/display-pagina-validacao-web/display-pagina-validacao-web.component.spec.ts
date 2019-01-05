import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPaginaValidacaoWebComponent } from './display-pagina-validacao-web.component';

describe('DisplayPaginaValidacaoWebComponent', () => {
  let component: DisplayPaginaValidacaoWebComponent;
  let fixture: ComponentFixture<DisplayPaginaValidacaoWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPaginaValidacaoWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPaginaValidacaoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
