import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAnuncioComponent } from './display-anuncio.component';

describe('DisplayAnuncioComponent', () => {
  let component: DisplayAnuncioComponent;
  let fixture: ComponentFixture<DisplayAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
