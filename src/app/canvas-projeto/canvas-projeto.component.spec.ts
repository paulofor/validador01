import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasProjetoComponent } from './canvas-projeto.component';

describe('CanvasProjetoComponent', () => {
  let component: CanvasProjetoComponent;
  let fixture: ComponentFixture<CanvasProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
