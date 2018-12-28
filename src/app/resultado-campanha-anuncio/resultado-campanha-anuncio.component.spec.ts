import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCampanhaAnuncioComponent } from './resultado-campanha-anuncio.component';

describe('ResultadoCampanhaAnuncioComponent', () => {
  let component: ResultadoCampanhaAnuncioComponent;
  let fixture: ComponentFixture<ResultadoCampanhaAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoCampanhaAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCampanhaAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
