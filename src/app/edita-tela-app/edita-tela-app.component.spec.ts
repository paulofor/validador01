import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTelaAppComponent } from './edita-tela-app.component';

describe('EditaTelaAppComponent', () => {
  let component: EditaTelaAppComponent;
  let fixture: ComponentFixture<EditaTelaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaTelaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTelaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
