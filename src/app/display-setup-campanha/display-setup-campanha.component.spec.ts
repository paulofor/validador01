import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySetupCampanhaComponent } from './display-setup-campanha.component';

describe('DisplaySetupCampanhaComponent', () => {
  let component: DisplaySetupCampanhaComponent;
  let fixture: ComponentFixture<DisplaySetupCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySetupCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySetupCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
