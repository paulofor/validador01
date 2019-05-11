import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoPalavraChaveDetalheComponent } from './projeto-palavra-chave-detalhe.component';

describe('ProjetoPalavraChaveDetalheComponent', () => {
  let component: ProjetoPalavraChaveDetalheComponent;
  let fixture: ComponentFixture<ProjetoPalavraChaveDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoPalavraChaveDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoPalavraChaveDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
