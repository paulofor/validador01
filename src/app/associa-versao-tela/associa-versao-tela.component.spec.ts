import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaVersaoTelaComponent } from './associa-versao-tela.component';

describe('AssociaVersaoTelaComponent', () => {
  let component: AssociaVersaoTelaComponent;
  let fixture: ComponentFixture<AssociaVersaoTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaVersaoTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaVersaoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
