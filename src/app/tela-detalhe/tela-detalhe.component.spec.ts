import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDetalheComponent } from './tela-detalhe.component';

describe('TelaDetalheComponent', () => {
  let component: TelaDetalheComponent;
  let fixture: ComponentFixture<TelaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
