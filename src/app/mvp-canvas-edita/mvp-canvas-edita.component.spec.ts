import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpCanvasEditaComponent } from './mvp-canvas-edita.component';

describe('MvpCanvasEditaComponent', () => {
  let component: MvpCanvasEditaComponent;
  let fixture: ComponentFixture<MvpCanvasEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpCanvasEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpCanvasEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
