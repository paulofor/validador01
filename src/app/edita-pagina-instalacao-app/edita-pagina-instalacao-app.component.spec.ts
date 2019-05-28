import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPaginaInstalacaoAppComponent } from './edita-pagina-instalacao-app.component';

describe('EditaPaginaInstalacaoAppComponent', () => {
  let component: EditaPaginaInstalacaoAppComponent;
  let fixture: ComponentFixture<EditaPaginaInstalacaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaPaginaInstalacaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPaginaInstalacaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
