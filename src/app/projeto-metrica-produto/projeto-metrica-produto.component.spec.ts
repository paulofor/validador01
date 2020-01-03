import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoMetricaProdutoComponent } from './projeto-metrica-produto.component';

describe('ProjetoMetricaProdutoComponent', () => {
  let component: ProjetoMetricaProdutoComponent;
  let fixture: ComponentFixture<ProjetoMetricaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoMetricaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoMetricaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
