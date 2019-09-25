import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoAppDetalheComponent } from './versao-app-detalhe.component';

describe('VersaoAppDetalheComponent', () => {
  let component: VersaoAppDetalheComponent;
  let fixture: ComponentFixture<VersaoAppDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersaoAppDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersaoAppDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
