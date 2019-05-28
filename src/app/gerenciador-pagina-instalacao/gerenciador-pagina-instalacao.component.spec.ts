import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorPaginaInstalacaoComponent } from './gerenciador-pagina-instalacao.component';

describe('GerenciadorPaginaInstalacaoComponent', () => {
  let component: GerenciadorPaginaInstalacaoComponent;
  let fixture: ComponentFixture<GerenciadorPaginaInstalacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorPaginaInstalacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorPaginaInstalacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
