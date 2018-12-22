import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaItemValidacaoTelaComponent } from './edita-item-validacao-tela.component';

describe('EditaItemValidacaoTelaComponent', () => {
  let component: EditaItemValidacaoTelaComponent;
  let fixture: ComponentFixture<EditaItemValidacaoTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaItemValidacaoTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaItemValidacaoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
