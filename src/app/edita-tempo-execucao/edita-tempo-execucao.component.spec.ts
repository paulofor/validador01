import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTempoExecucaoComponent } from './edita-tempo-execucao.component';

describe('EditaTempoExecucaoComponent', () => {
  let component: EditaTempoExecucaoComponent;
  let fixture: ComponentFixture<EditaTempoExecucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaTempoExecucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTempoExecucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
