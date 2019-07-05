import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoAppListaComponent } from './versao-app-lista.component';

describe('VersaoAppListaComponent', () => {
  let component: VersaoAppListaComponent;
  let fixture: ComponentFixture<VersaoAppListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersaoAppListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersaoAppListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
