import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPaginaInstalacaoAppComponent } from './edicao-pagina-instalacao-app.component';

describe('EdicaoPaginaInstalacaoAppComponent', () => {
  let component: EdicaoPaginaInstalacaoAppComponent;
  let fixture: ComponentFixture<EdicaoPaginaInstalacaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoPaginaInstalacaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoPaginaInstalacaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
