import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlanoSemanaComponent } from './display-plano-semana.component';

describe('DisplayPlanoSemanaComponent', () => {
  let component: DisplayPlanoSemanaComponent;
  let fixture: ComponentFixture<DisplayPlanoSemanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlanoSemanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlanoSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
