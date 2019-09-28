import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVersaoAppComponent } from './display-versao-app.component';

describe('DisplayVersaoAppComponent', () => {
  let component: DisplayVersaoAppComponent;
  let fixture: ComponentFixture<DisplayVersaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayVersaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVersaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
