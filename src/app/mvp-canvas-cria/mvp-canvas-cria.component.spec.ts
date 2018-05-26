import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpCanvasCriaComponent } from './mvp-canvas-cria.component';

describe('MvpCanvasCriaComponent', () => {
  let component: MvpCanvasCriaComponent;
  let fixture: ComponentFixture<MvpCanvasCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpCanvasCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpCanvasCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
