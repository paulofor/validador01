import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolheAnuncioParaCampanhaComponent } from './escolhe-anuncio-para-campanha.component';

describe('EscolheAnuncioParaCampanhaComponent', () => {
  let component: EscolheAnuncioParaCampanhaComponent;
  let fixture: ComponentFixture<EscolheAnuncioParaCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolheAnuncioParaCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolheAnuncioParaCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
