import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoTelaAppEditaComponent } from './versao-tela-app-edita.component';

describe('VersaoTelaAppEditaComponent', () => {
  let component: VersaoTelaAppEditaComponent;
  let fixture: ComponentFixture<VersaoTelaAppEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersaoTelaAppEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersaoTelaAppEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
