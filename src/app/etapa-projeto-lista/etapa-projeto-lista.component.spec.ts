import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaProjetoListaComponent } from './etapa-projeto-lista.component';

describe('EtapaProjetoListaComponent', () => {
  let component: EtapaProjetoListaComponent;
  let fixture: ComponentFixture<EtapaProjetoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaProjetoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaProjetoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
