import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCanvasCriaComponent } from './projeto-canvas-cria.component';

describe('ProjetoCanvasCriaComponent', () => {
  let component: ProjetoCanvasCriaComponent;
  let fixture: ComponentFixture<ProjetoCanvasCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoCanvasCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoCanvasCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
