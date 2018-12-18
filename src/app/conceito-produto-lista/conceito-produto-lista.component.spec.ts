import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitoProdutoListaComponent } from './conceito-produto-lista.component';

describe('ConceitoProdutoListaComponent', () => {
  let component: ConceitoProdutoListaComponent;
  let fixture: ComponentFixture<ConceitoProdutoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceitoProdutoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceitoProdutoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
