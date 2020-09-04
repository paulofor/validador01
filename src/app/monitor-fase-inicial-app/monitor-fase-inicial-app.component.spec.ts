import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorFaseInicialAppComponent } from './monitor-fase-inicial-app.component';

describe('MonitorFaseInicialAppComponent', () => {
  let component: MonitorFaseInicialAppComponent;
  let fixture: ComponentFixture<MonitorFaseInicialAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorFaseInicialAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorFaseInicialAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
