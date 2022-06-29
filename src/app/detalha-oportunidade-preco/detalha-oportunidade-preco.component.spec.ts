import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaOportunidadePrecoComponent } from './detalha-oportunidade-preco.component';

describe('DetalhaOportunidadePrecoComponent', () => {
  let component: DetalhaOportunidadePrecoComponent;
  let fixture: ComponentFixture<DetalhaOportunidadePrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhaOportunidadePrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaOportunidadePrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
