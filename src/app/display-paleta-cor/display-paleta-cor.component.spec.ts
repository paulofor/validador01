import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPaletaCorComponent } from './display-paleta-cor.component';

describe('DisplayPaletaCorComponent', () => {
  let component: DisplayPaletaCorComponent;
  let fixture: ComponentFixture<DisplayPaletaCorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPaletaCorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPaletaCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
