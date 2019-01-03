import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaSetupCampanhaComponent } from './edita-setup-campanha.component';

describe('EditaSetupCampanhaComponent', () => {
  let component: EditaSetupCampanhaComponent;
  let fixture: ComponentFixture<EditaSetupCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaSetupCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaSetupCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
