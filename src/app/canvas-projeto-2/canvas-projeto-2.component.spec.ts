import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasProjeto2Component } from './canvas-projeto-2.component';

describe('CanvasProjeto2Component', () => {
  let component: CanvasProjeto2Component;
  let fixture: ComponentFixture<CanvasProjeto2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasProjeto2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasProjeto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
