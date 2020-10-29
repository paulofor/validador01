import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHistoricoComponent } from './usuario-historico.component';

describe('UsuarioHistoricoComponent', () => {
  let component: UsuarioHistoricoComponent;
  let fixture: ComponentFixture<UsuarioHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
