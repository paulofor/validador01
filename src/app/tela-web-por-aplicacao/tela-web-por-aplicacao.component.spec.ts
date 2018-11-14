import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaWebPorAplicacaoComponent } from './tela-web-por-aplicacao.component';

describe('TelaWebPorAplicacaoComponent', () => {
  let component: TelaWebPorAplicacaoComponent;
  let fixture: ComponentFixture<TelaWebPorAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaWebPorAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaWebPorAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
