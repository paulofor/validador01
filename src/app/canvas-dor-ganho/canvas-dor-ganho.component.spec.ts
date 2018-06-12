import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasDorGanhoComponent } from './canvas-dor-ganho.component';

describe('CanvasDorGanhoComponent', () => {
  let component: CanvasDorGanhoComponent;
  let fixture: ComponentFixture<CanvasDorGanhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasDorGanhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasDorGanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
