import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DorGanhoPalavraChaveComponent } from './dor-ganho-palavra-chave.component';

describe('DorGanhoPalavraChaveComponent', () => {
  let component: DorGanhoPalavraChaveComponent;
  let fixture: ComponentFixture<DorGanhoPalavraChaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorGanhoPalavraChaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorGanhoPalavraChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
