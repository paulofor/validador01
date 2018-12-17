import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaValorConceitoComponent } from './edita-valor-conceito.component';

describe('EditaValorConceitoComponent', () => {
  let component: EditaValorConceitoComponent;
  let fixture: ComponentFixture<EditaValorConceitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaValorConceitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaValorConceitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
