import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolheItemValidacaoComponent } from './escolhe-item-validacao.component';

describe('EscolheItemValidacaoComponent', () => {
  let component: EscolheItemValidacaoComponent;
  let fixture: ComponentFixture<EscolheItemValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolheItemValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolheItemValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
