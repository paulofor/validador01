import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTesteComponent } from './image-teste.component';

describe('ImageTesteComponent', () => {
  let component: ImageTesteComponent;
  let fixture: ComponentFixture<ImageTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
