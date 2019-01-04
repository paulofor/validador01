import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaEditaCriaV2Component } from './campanha-edita-cria-v2.component';

describe('CampanhaEditaCriaV2Component', () => {
  let component: CampanhaEditaCriaV2Component;
  let fixture: ComponentFixture<CampanhaEditaCriaV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaEditaCriaV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaEditaCriaV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
