import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTempoExecucaoRecursoComponent } from './edita-tempo-execucao-recurso.component';

describe('EditaTempoExecucaoRecursoComponent', () => {
  let component: EditaTempoExecucaoRecursoComponent;
  let fixture: ComponentFixture<EditaTempoExecucaoRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaTempoExecucaoRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTempoExecucaoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
