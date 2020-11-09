import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAppExibeDetalheComponent } from './tela-app-exibe-detalhe.component';

describe('TelaAppExibeDetalheComponent', () => {
  let component: TelaAppExibeDetalheComponent;
  let fixture: ComponentFixture<TelaAppExibeDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAppExibeDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAppExibeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
