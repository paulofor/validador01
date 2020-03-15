import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoDiariaRecursoComponent } from './execucao-diaria-recurso.component';

describe('ExecucaoDiariaRecursoComponent', () => {
  let component: ExecucaoDiariaRecursoComponent;
  let fixture: ComponentFixture<ExecucaoDiariaRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecucaoDiariaRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoDiariaRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
