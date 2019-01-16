import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresPalavrasBaixoCustoComponent } from './melhores-palavras-baixo-custo.component';

describe('MelhoresPalavrasBaixoCustoComponent', () => {
  let component: MelhoresPalavrasBaixoCustoComponent;
  let fixture: ComponentFixture<MelhoresPalavrasBaixoCustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresPalavrasBaixoCustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresPalavrasBaixoCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
