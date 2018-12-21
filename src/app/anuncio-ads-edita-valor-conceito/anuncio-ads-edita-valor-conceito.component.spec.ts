import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioAdsEditaValorConceitoComponent } from './anuncio-ads-edita-valor-conceito.component';

describe('AnuncioAdsEditaValorConceitoComponent', () => {
  let component: AnuncioAdsEditaValorConceitoComponent;
  let fixture: ComponentFixture<AnuncioAdsEditaValorConceitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioAdsEditaValorConceitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioAdsEditaValorConceitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
