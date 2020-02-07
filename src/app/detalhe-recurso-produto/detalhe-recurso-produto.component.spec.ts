import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRecursoProdutoComponent } from './detalhe-recurso-produto.component';

describe('DetalheRecursoProdutoComponent', () => {
  let component: DetalheRecursoProdutoComponent;
  let fixture: ComponentFixture<DetalheRecursoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRecursoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRecursoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
