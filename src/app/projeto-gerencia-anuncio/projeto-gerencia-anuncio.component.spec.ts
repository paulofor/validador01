import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoGerenciaAnuncioComponent } from './projeto-gerencia-anuncio.component';

describe('ProjetoGerenciaAnuncioComponent', () => {
  let component: ProjetoGerenciaAnuncioComponent;
  let fixture: ComponentFixture<ProjetoGerenciaAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoGerenciaAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoGerenciaAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
