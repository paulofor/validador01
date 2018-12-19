import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTelaWebComponent } from './edita-tela-web.component';

describe('EditaTelaWebComponent', () => {
  let component: EditaTelaWebComponent;
  let fixture: ComponentFixture<EditaTelaWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaTelaWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTelaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
