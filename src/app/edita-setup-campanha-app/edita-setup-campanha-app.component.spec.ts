import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaSetupCampanhaAppComponent } from './edita-setup-campanha-app.component';

describe('EditaSetupCampanhaAppComponent', () => {
  let component: EditaSetupCampanhaAppComponent;
  let fixture: ComponentFixture<EditaSetupCampanhaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaSetupCampanhaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaSetupCampanhaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
