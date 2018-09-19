import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoAplicacaoComponent } from './resumo-aplicacao.component';

describe('ResumoAplicacaoComponent', () => {
  let component: ResumoAplicacaoComponent;
  let fixture: ComponentFixture<ResumoAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
