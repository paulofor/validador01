import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCampanhaPalavraChaveComponent } from './resultado-campanha-palavra-chave.component';

describe('ResultadoCampanhaPalavraChaveComponent', () => {
  let component: ResultadoCampanhaPalavraChaveComponent;
  let fixture: ComponentFixture<ResultadoCampanhaPalavraChaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoCampanhaPalavraChaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCampanhaPalavraChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
