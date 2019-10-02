import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoAnoComponent } from './custo-ano.component';

describe('CustoAnoComponent', () => {
  let component: CustoAnoComponent;
  let fixture: ComponentFixture<CustoAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustoAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
