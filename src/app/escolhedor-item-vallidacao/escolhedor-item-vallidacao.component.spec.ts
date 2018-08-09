import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhedorItemVallidacaoComponent } from './escolhedor-item-vallidacao.component';

describe('EscolhedorItemVallidacaoComponent', () => {
  let component: EscolhedorItemVallidacaoComponent;
  let fixture: ComponentFixture<EscolhedorItemVallidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhedorItemVallidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhedorItemVallidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
