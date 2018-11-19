import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresPalavrasListaPorRaizComponent } from './melhores-palavras-lista-por-raiz.component';

describe('MelhoresPalavrasListaPorRaizComponent', () => {
  let component: MelhoresPalavrasListaPorRaizComponent;
  let fixture: ComponentFixture<MelhoresPalavrasListaPorRaizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresPalavrasListaPorRaizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresPalavrasListaPorRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
