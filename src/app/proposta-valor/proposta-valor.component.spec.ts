import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaValorComponent } from './proposta-valor.component';

describe('PropostaValorComponent', () => {
  let component: PropostaValorComponent;
  let fixture: ComponentFixture<PropostaValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
