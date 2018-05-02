import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploCanvasComponent } from './exemplo-canvas.component';

describe('ExemploCanvasComponent', () => {
  let component: ExemploCanvasComponent;
  let fixture: ComponentFixture<ExemploCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
