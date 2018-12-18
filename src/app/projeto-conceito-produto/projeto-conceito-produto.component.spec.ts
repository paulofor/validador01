import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoConceitoProdutoComponent } from './projeto-conceito-produto.component';

describe('ProjetoConceitoProdutoComponent', () => {
  let component: ProjetoConceitoProdutoComponent;
  let fixture: ComponentFixture<ProjetoConceitoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoConceitoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoConceitoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
