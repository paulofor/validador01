import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoComponenteWebListaComponent } from './tipo-componente-web-lista.component';

describe('TipoComponenteWebListaComponent', () => {
  let component: TipoComponenteWebListaComponent;
  let fixture: ComponentFixture<TipoComponenteWebListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoComponenteWebListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoComponenteWebListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
