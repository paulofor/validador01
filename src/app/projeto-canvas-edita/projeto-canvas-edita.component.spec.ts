import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCanvasEditaComponent } from './projeto-canvas-edita.component';

describe('ProjetoCanvasEditaComponent', () => {
  let component: ProjetoCanvasEditaComponent;
  let fixture: ComponentFixture<ProjetoCanvasEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoCanvasEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoCanvasEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
