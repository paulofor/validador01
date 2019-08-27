import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencaLojaEditaComponent } from './presenca-loja-edita.component';

describe('PresencaLojaEditaComponent', () => {
  let component: PresencaLojaEditaComponent;
  let fixture: ComponentFixture<PresencaLojaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencaLojaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencaLojaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
