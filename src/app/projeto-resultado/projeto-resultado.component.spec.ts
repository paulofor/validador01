import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoResultadoComponent } from './projeto-resultado.component';

describe('ProjetoResultadoComponent', () => {
  let component: ProjetoResultadoComponent;
  let fixture: ComponentFixture<ProjetoResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
