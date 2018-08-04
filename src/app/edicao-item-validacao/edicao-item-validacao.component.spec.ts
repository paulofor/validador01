import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoItemValidacaoComponent } from './edicao-item-validacao.component';

describe('EdicaoItemValidacaoComponent', () => {
  let component: EdicaoItemValidacaoComponent;
  let fixture: ComponentFixture<EdicaoItemValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoItemValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoItemValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
