import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPerdidoListaComponent } from './usuario-perdido-lista.component';

describe('UsuarioPerdidoListaComponent', () => {
  let component: UsuarioPerdidoListaComponent;
  let fixture: ComponentFixture<UsuarioPerdidoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPerdidoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPerdidoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
