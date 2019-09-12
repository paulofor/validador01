import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIdeiaMelhoriaOrigemComponent } from './display-ideia-melhoria-origem.component';

describe('DisplayIdeiaMelhoriaOrigemComponent', () => {
  let component: DisplayIdeiaMelhoriaOrigemComponent;
  let fixture: ComponentFixture<DisplayIdeiaMelhoriaOrigemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIdeiaMelhoriaOrigemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIdeiaMelhoriaOrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
