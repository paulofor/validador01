import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencaLojaListaComponent } from './presenca-loja-lista.component';

describe('PresencaLojaListaComponent', () => {
  let component: PresencaLojaListaComponent;
  let fixture: ComponentFixture<PresencaLojaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencaLojaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencaLojaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
