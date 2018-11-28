import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoNegocioEditaComponent } from './processo-negocio-edita.component';

describe('ProcessoNegocioEditaComponent', () => {
  let component: ProcessoNegocioEditaComponent;
  let fixture: ComponentFixture<ProcessoNegocioEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessoNegocioEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoNegocioEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
