import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaItemValorPorProjetoComponent } from './edita-item-valor-por-projeto.component';

describe('EditaItemValorPorProjetoComponent', () => {
  let component: EditaItemValorPorProjetoComponent;
  let fixture: ComponentFixture<EditaItemValorPorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaItemValorPorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaItemValorPorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
