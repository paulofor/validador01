import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAplicacaoComponent } from './edita-aplicacao.component';

describe('EditaAplicacaoComponent', () => {
  let component: EditaAplicacaoComponent;
  let fixture: ComponentFixture<EditaAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
