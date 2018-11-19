import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveRaizDetalheComponent } from './palavra-chave-raiz-detalhe.component';

describe('PalavraChaveRaizDetalheComponent', () => {
  let component: PalavraChaveRaizDetalheComponent;
  let fixture: ComponentFixture<PalavraChaveRaizDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraChaveRaizDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraChaveRaizDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
