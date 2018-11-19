import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresPalavrasListaGeralComponent } from './melhores-palavras-lista-geral.component';

describe('MelhoresPalavrasListaGeralComponent', () => {
  let component: MelhoresPalavrasListaGeralComponent;
  let fixture: ComponentFixture<MelhoresPalavrasListaGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresPalavrasListaGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresPalavrasListaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
