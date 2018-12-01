import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoExperienciaListaComponent } from './tipo-experiencia-lista.component';

describe('TipoExperienciaListaComponent', () => {
  let component: TipoExperienciaListaComponent;
  let fixture: ComponentFixture<TipoExperienciaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoExperienciaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoExperienciaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
