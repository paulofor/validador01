import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocacaoPalavraChaveComponent } from './alocacao-palavra-chave.component';

describe('AlocacaoPalavraChaveComponent', () => {
  let component: AlocacaoPalavraChaveComponent;
  let fixture: ComponentFixture<AlocacaoPalavraChaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlocacaoPalavraChaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlocacaoPalavraChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
