import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioProdutoHistoricoComponent } from './usuario-produto-historico.component';

describe('UsuarioProdutoHistoricoComponent', () => {
  let component: UsuarioProdutoHistoricoComponent;
  let fixture: ComponentFixture<UsuarioProdutoHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioProdutoHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioProdutoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
