import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DorGanhoCanvasEditaComponent } from './dor-ganho-canvas-edita.component';

describe('DorGanhoCanvasEditaComponent', () => {
  let component: DorGanhoCanvasEditaComponent;
  let fixture: ComponentFixture<DorGanhoCanvasEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorGanhoCanvasEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorGanhoCanvasEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
