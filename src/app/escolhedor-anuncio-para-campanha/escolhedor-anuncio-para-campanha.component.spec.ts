import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhedorAnuncioParaCampanhaComponent } from './escolhedor-anuncio-para-campanha.component';

describe('EscolhedorAnuncioParaCampanhaComponent', () => {
  let component: EscolhedorAnuncioParaCampanhaComponent;
  let fixture: ComponentFixture<EscolhedorAnuncioParaCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhedorAnuncioParaCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhedorAnuncioParaCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
