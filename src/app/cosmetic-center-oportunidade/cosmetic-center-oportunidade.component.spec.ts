import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticCenterOportunidadeComponent } from './cosmetic-center-oportunidade.component';

describe('CosmeticCenterOportunidadeComponent', () => {
  let component: CosmeticCenterOportunidadeComponent;
  let fixture: ComponentFixture<CosmeticCenterOportunidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticCenterOportunidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticCenterOportunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
