import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresPalavrasGeralComponent } from './melhores-palavras-geral.component';

describe('MelhoresPalavrasGeralComponent', () => {
  let component: MelhoresPalavrasGeralComponent;
  let fixture: ComponentFixture<MelhoresPalavrasGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresPalavrasGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresPalavrasGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
