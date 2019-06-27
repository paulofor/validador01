import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioAppGerenciadorComponent } from './anuncio-app-gerenciador.component';

describe('AnuncioAppGerenciadorComponent', () => {
  let component: AnuncioAppGerenciadorComponent;
  let fixture: ComponentFixture<AnuncioAppGerenciadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioAppGerenciadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioAppGerenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
