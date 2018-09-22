import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaEditaCriaComponent } from './campanha-edita-cria.component';

describe('CampanhaEditaCriaComponent', () => {
  let component: CampanhaEditaCriaComponent;
  let fixture: ComponentFixture<CampanhaEditaCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaEditaCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaEditaCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
