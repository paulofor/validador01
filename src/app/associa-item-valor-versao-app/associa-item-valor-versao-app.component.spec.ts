import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaItemValorVersaoAppComponent } from './associa-item-valor-versao-app.component';

describe('AssociaItemValorVersaoAppComponent', () => {
  let component: AssociaItemValorVersaoAppComponent;
  let fixture: ComponentFixture<AssociaItemValorVersaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaItemValorVersaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaItemValorVersaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
