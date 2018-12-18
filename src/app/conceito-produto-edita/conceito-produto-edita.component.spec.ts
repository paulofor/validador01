import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitoProdutoEditaComponent } from './conceito-produto-edita.component';

describe('ConceitoProdutoEditaComponent', () => {
  let component: ConceitoProdutoEditaComponent;
  let fixture: ComponentFixture<ConceitoProdutoEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceitoProdutoEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceitoProdutoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
