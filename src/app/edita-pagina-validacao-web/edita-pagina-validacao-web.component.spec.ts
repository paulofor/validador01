import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPaginaValidacaoWebComponent } from './edita-pagina-validacao-web.component';

describe('EditaPaginaValidacaoWebComponent', () => {
  let component: EditaPaginaValidacaoWebComponent;
  let fixture: ComponentFixture<EditaPaginaValidacaoWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaPaginaValidacaoWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPaginaValidacaoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
