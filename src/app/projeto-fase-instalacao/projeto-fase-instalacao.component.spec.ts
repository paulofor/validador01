import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoFaseInstalacaoComponent } from './projeto-fase-instalacao.component';

describe('ProjetoFaseInstalacaoComponent', () => {
  let component: ProjetoFaseInstalacaoComponent;
  let fixture: ComponentFixture<ProjetoFaseInstalacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoFaseInstalacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoFaseInstalacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
