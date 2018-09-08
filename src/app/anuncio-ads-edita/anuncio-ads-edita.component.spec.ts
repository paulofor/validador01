import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioAdsEditaComponent } from './anuncio-ads-edita.component';

describe('AnuncioAdsEditaComponent', () => {
  let component: AnuncioAdsEditaComponent;
  let fixture: ComponentFixture<AnuncioAdsEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioAdsEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioAdsEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
