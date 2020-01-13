import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaRecursoProdutoComponent } from './edita-recurso-produto.component';

describe('EditaRecursoProdutoComponent', () => {
  let component: EditaRecursoProdutoComponent;
  let fixture: ComponentFixture<EditaRecursoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaRecursoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaRecursoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
