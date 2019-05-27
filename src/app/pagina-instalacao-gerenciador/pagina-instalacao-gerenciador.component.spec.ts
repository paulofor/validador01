import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInstalacaoGerenciadorComponent } from './pagina-instalacao-gerenciador.component';

describe('PaginaInstalacaoGerenciadorComponent', () => {
  let component: PaginaInstalacaoGerenciadorComponent;
  let fixture: ComponentFixture<PaginaInstalacaoGerenciadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaInstalacaoGerenciadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInstalacaoGerenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
