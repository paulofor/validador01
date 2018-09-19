import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadePorAplicacaoComponent } from './entidade-por-aplicacao.component';

describe('EntidadePorAplicacaoComponent', () => {
  let component: EntidadePorAplicacaoComponent;
  let fixture: ComponentFixture<EntidadePorAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadePorAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadePorAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
