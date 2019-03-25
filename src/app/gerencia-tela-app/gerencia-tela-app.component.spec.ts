import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaTelaAppComponent } from './gerencia-tela-app.component';

describe('GerenciaTelaAppComponent', () => {
  let component: GerenciaTelaAppComponent;
  let fixture: ComponentFixture<GerenciaTelaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaTelaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaTelaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
