import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoUsuarioDetalheComponent } from './projeto-usuario-detalhe.component';

describe('ProjetoUsuarioDetalheComponent', () => {
  let component: ProjetoUsuarioDetalheComponent;
  let fixture: ComponentFixture<ProjetoUsuarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoUsuarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoUsuarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
