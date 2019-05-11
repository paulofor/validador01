import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoPalavraChaveComponent } from './projeto-palavra-chave.component';

describe('ProjetoPalavraChaveComponent', () => {
  let component: ProjetoPalavraChaveComponent;
  let fixture: ComponentFixture<ProjetoPalavraChaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoPalavraChaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoPalavraChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
