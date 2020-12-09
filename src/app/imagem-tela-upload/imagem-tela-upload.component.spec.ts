import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemTelaUploadComponent } from './imagem-tela-upload.component';

describe('ImagemTelaUploadComponent', () => {
  let component: ImagemTelaUploadComponent;
  let fixture: ComponentFixture<ImagemTelaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemTelaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemTelaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
