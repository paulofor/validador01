import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAppDetalheComponent } from './tela-app-detalhe.component';

describe('TelaAppDetalheComponent', () => {
  let component: TelaAppDetalheComponent;
  let fixture: ComponentFixture<TelaAppDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAppDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAppDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
