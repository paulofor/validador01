import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaletaCorComponent } from './lista-paleta-cor.component';

describe('ListaPaletaCorComponent', () => {
  let component: ListaPaletaCorComponent;
  let fixture: ComponentFixture<ListaPaletaCorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPaletaCorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPaletaCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
