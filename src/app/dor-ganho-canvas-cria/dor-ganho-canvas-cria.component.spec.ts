import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DorGanhoCanvasCriaComponent } from './dor-ganho-canvas-cria.component';

describe('DorGanhoCanvasCriaComponent', () => {
  let component: DorGanhoCanvasCriaComponent;
  let fixture: ComponentFixture<DorGanhoCanvasCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorGanhoCanvasCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorGanhoCanvasCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
