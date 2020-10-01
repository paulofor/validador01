import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicaProcessoComponent } from './explica-processo.component';

describe('ExplicaProcessoComponent', () => {
  let component: ExplicaProcessoComponent;
  let fixture: ComponentFixture<ExplicaProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplicaProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicaProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
