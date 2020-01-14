import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEtapaFunilComponent } from './lista-etapa-funil.component';

describe('ListaEtapaFunilComponent', () => {
  let component: ListaEtapaFunilComponent;
  let fixture: ComponentFixture<ListaEtapaFunilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEtapaFunilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEtapaFunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
