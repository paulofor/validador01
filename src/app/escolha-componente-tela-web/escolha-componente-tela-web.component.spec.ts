import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaComponenteTelaWebComponent } from './escolha-componente-tela-web.component';

describe('EscolhaComponenteTelaWebComponent', () => {
  let component: EscolhaComponenteTelaWebComponent;
  let fixture: ComponentFixture<EscolhaComponenteTelaWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaComponenteTelaWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaComponenteTelaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
