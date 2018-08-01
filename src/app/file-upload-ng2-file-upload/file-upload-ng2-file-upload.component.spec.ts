import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadNg2FileUploadComponent } from './file-upload-ng2-file-upload.component';

describe('FileUploadNg2FileUploadComponent', () => {
  let component: FileUploadNg2FileUploadComponent;
  let fixture: ComponentFixture<FileUploadNg2FileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadNg2FileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadNg2FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
