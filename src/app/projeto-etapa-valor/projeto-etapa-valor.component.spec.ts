import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoEtapaValorComponent } from './projeto-etapa-valor.component';

describe('ProjetoEtapaValorComponent', () => {
  let component: ProjetoEtapaValorComponent;
  let fixture: ComponentFixture<ProjetoEtapaValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoEtapaValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoEtapaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
