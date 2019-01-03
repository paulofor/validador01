import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSetupCampanhaComponent } from './lista-setup-campanha.component';

describe('ListaSetupCampanhaComponent', () => {
  let component: ListaSetupCampanhaComponent;
  let fixture: ComponentFixture<ListaSetupCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSetupCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSetupCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
