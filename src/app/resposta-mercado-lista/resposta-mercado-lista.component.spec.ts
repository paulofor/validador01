import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaMercadoListaComponent } from './resposta-mercado-lista.component';

describe('RespostaMercadoListaComponent', () => {
  let component: RespostaMercadoListaComponent;
  let fixture: ComponentFixture<RespostaMercadoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaMercadoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaMercadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
