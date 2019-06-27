import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAnuncioAppComponent } from './edita-anuncio-app.component';

describe('EditaAnuncioAppComponent', () => {
  let component: EditaAnuncioAppComponent;
  let fixture: ComponentFixture<EditaAnuncioAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAnuncioAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAnuncioAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
