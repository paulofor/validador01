import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveRaizComponent } from './palavra-chave-raiz.component';

describe('PalavraChaveRaizComponent', () => {
  let component: PalavraChaveRaizComponent;
  let fixture: ComponentFixture<PalavraChaveRaizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraChaveRaizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraChaveRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
