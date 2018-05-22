import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasMvpComponent } from './canvas-mvp.component';

describe('CanvasMvpComponent', () => {
  let component: CanvasMvpComponent;
  let fixture: ComponentFixture<CanvasMvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasMvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
