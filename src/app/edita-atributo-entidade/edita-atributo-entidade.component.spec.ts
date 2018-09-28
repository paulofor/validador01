import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAtributoEntidadeComponent } from './edita-atributo-entidade.component';

describe('EditaAtributoEntidadeComponent', () => {
  let component: EditaAtributoEntidadeComponent;
  let fixture: ComponentFixture<EditaAtributoEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAtributoEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAtributoEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
