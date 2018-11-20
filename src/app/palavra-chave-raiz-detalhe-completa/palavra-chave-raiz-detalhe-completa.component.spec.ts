import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveRaizDetalheCompletaComponent } from './palavra-chave-raiz-detalhe-completa.component';

describe('PalavraChaveRaizDetalheCompletaComponent', () => {
  let component: PalavraChaveRaizDetalheCompletaComponent;
  let fixture: ComponentFixture<PalavraChaveRaizDetalheCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraChaveRaizDetalheCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraChaveRaizDetalheCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
