import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveAddProjetoComponent } from './palavra-chave-add-projeto.component';

describe('PalavraChaveAddProjetoComponent', () => {
  let component: PalavraChaveAddProjetoComponent;
  let fixture: ComponentFixture<PalavraChaveAddProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraChaveAddProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraChaveAddProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
