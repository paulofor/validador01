import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoDiariaComponent } from './execucao-diaria.component';

describe('ExecucaoDiariaComponent', () => {
  let component: ExecucaoDiariaComponent;
  let fixture: ComponentFixture<ExecucaoDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecucaoDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
