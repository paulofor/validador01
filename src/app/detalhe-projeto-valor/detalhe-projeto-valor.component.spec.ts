import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProjetoValorComponent } from './detalhe-projeto-valor.component';

describe('DetalheProjetoValorComponent', () => {
  let component: DetalheProjetoValorComponent;
  let fixture: ComponentFixture<DetalheProjetoValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheProjetoValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProjetoValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
