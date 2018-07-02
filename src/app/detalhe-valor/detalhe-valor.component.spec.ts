import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheValorComponent } from './detalhe-valor.component';

describe('DetalheValorComponent', () => {
  let component: DetalheValorComponent;
  let fixture: ComponentFixture<DetalheValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
