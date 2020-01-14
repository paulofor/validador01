import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaFunilComponent } from './edita-funil.component';

describe('EditaFunilComponent', () => {
  let component: EditaFunilComponent;
  let fixture: ComponentFixture<EditaFunilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaFunilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaFunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
