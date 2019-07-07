import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantePorVersaoAppComponent } from './visitante-por-versao-app.component';

describe('VisitantePorVersaoAppComponent', () => {
  let component: VisitantePorVersaoAppComponent;
  let fixture: ComponentFixture<VisitantePorVersaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantePorVersaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantePorVersaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
