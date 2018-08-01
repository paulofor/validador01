import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadNgxFileDropComponent } from './file-upload-ngx-file-drop.component';

describe('FileUploadNgxFileDropComponent', () => {
  let component: FileUploadNgxFileDropComponent;
  let fixture: ComponentFixture<FileUploadNgxFileDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadNgxFileDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadNgxFileDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
