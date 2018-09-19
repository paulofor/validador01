import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAplicacaoComponent } from './detalhe-aplicacao.component';

describe('DetalheAplicacaoComponent', () => {
  let component: DetalheAplicacaoComponent;
  let fixture: ComponentFixture<DetalheAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
