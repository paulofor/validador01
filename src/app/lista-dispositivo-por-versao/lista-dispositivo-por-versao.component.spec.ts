import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDispositivoPorVersaoComponent } from './lista-dispositivo-por-versao.component';

describe('ListaDispositivoPorVersaoComponent', () => {
  let component: ListaDispositivoPorVersaoComponent;
  let fixture: ComponentFixture<ListaDispositivoPorVersaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDispositivoPorVersaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDispositivoPorVersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
