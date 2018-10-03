import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaRelacionamentoEntidadeComponent } from './edita-relacionamento-entidade.component';

describe('EditaRelacionamentoEntidadeComponent', () => {
  let component: EditaRelacionamentoEntidadeComponent;
  let fixture: ComponentFixture<EditaRelacionamentoEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaRelacionamentoEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaRelacionamentoEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
