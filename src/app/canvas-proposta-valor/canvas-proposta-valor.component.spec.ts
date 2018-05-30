import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPropostaValorComponent } from './canvas-proposta-valor.component';

describe('CanvasPropostaValorComponent', () => {
  let component: CanvasPropostaValorComponent;
  let fixture: ComponentFixture<CanvasPropostaValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPropostaValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPropostaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
