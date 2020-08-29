import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaAppComponent } from './visita-app.component';

describe('VisitaAppComponent', () => {
  let component: VisitaAppComponent;
  let fixture: ComponentFixture<VisitaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
