import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadePorAplicacaoV2Component } from './entidade-por-aplicacao-v2.component';

describe('EntidadePorAplicacaoV2Component', () => {
  let component: EntidadePorAplicacaoV2Component;
  let fixture: ComponentFixture<EntidadePorAplicacaoV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadePorAplicacaoV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadePorAplicacaoV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
