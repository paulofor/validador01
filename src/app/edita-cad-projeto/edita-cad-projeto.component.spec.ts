import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCadProjetoComponent } from './edita-cad-projeto.component';

describe('EditaCadProjetoComponent', () => {
  let component: EditaCadProjetoComponent;
  let fixture: ComponentFixture<EditaCadProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaCadProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaCadProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
