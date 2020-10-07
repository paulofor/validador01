import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaOportunidadeComponent } from './tecnologia-oportunidade.component';

describe('TecnologiaOportunidadeComponent', () => {
  let component: TecnologiaOportunidadeComponent;
  let fixture: ComponentFixture<TecnologiaOportunidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiaOportunidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaOportunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
