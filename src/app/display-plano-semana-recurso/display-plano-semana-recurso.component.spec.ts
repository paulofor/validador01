import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlanoSemanaRecursoComponent } from './display-plano-semana-recurso.component';

describe('DisplayPlanoSemanaRecursoComponent', () => {
  let component: DisplayPlanoSemanaRecursoComponent;
  let fixture: ComponentFixture<DisplayPlanoSemanaRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlanoSemanaRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlanoSemanaRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
