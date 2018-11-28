import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoNegocioListaComponent } from './processo-negocio-lista.component';

describe('ProcessoNegocioListaComponent', () => {
  let component: ProcessoNegocioListaComponent;
  let fixture: ComponentFixture<ProcessoNegocioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessoNegocioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoNegocioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
