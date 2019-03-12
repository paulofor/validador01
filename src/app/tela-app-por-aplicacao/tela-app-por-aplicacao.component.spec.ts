import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAppPorAplicacaoComponent } from './tela-app-por-aplicacao.component';

describe('TelaAppPorAplicacaoComponent', () => {
  let component: TelaAppPorAplicacaoComponent;
  let fixture: ComponentFixture<TelaAppPorAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAppPorAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAppPorAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
