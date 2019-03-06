import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCriaItemValidacaoProjetoComponent } from './edita-cria-item-validacao-projeto.component';

describe('EditaCriaItemValidacaoProjetoComponent', () => {
  let component: EditaCriaItemValidacaoProjetoComponent;
  let fixture: ComponentFixture<EditaCriaItemValidacaoProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaCriaItemValidacaoProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaCriaItemValidacaoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
