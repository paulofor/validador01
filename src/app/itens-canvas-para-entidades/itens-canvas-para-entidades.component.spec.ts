import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCanvasParaEntidadesComponent } from './itens-canvas-para-entidades.component';

describe('ItensCanvasParaEntidadesComponent', () => {
  let component: ItensCanvasParaEntidadesComponent;
  let fixture: ComponentFixture<ItensCanvasParaEntidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensCanvasParaEntidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensCanvasParaEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
