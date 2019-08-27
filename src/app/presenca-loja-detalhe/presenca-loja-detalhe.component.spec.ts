import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencaLojaDetalheComponent } from './presenca-loja-detalhe.component';

describe('PresencaLojaDetalheComponent', () => {
  let component: PresencaLojaDetalheComponent;
  let fixture: ComponentFixture<PresencaLojaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencaLojaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencaLojaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
