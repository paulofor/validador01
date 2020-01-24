import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricaCampanhaComponent } from './metrica-campanha.component';

describe('MetricaCampanhaComponent', () => {
  let component: MetricaCampanhaComponent;
  let fixture: ComponentFixture<MetricaCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricaCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricaCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
