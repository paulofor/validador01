import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaIndicadorProdutoComponent } from './edita-indicador-produto.component';

describe('EditaIndicadorProdutoComponent', () => {
  let component: EditaIndicadorProdutoComponent;
  let fixture: ComponentFixture<EditaIndicadorProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaIndicadorProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaIndicadorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
