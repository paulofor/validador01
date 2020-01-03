import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricaMesProdutoComponent } from './metrica-mes-produto.component';

describe('MetricaMesProdutoComponent', () => {
  let component: MetricaMesProdutoComponent;
  let fixture: ComponentFixture<MetricaMesProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricaMesProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricaMesProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
