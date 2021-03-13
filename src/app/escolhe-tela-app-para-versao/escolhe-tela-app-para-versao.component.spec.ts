import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolheTelaAppParaVersaoComponent } from './escolhe-tela-app-para-versao.component';

describe('EscolheTelaAppParaVersaoComponent', () => {
  let component: EscolheTelaAppParaVersaoComponent;
  let fixture: ComponentFixture<EscolheTelaAppParaVersaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolheTelaAppParaVersaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolheTelaAppParaVersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
