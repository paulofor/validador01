import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresPalavrasTelaComponent } from './melhores-palavras-tela.component';

describe('MelhoresPalavrasTelaComponent', () => {
  let component: MelhoresPalavrasTelaComponent;
  let fixture: ComponentFixture<MelhoresPalavrasTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresPalavrasTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresPalavrasTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
