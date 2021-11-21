import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricaVersaoAppComponent } from './metrica-versao-app.component';

describe('MetricaVersaoAppComponent', () => {
  let component: MetricaVersaoAppComponent;
  let fixture: ComponentFixture<MetricaVersaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricaVersaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricaVersaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
