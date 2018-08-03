import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2ImageUploadComponent } from './angular2-image-upload.component';

describe('Angular2ImageUploadComponent', () => {
  let component: Angular2ImageUploadComponent;
  let fixture: ComponentFixture<Angular2ImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2ImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2ImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
