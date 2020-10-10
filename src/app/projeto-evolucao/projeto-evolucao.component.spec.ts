import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoEvolucaoComponent } from './projeto-evolucao.component';

describe('ProjetoEvolucaoComponent', () => {
  let component: ProjetoEvolucaoComponent;
  let fixture: ComponentFixture<ProjetoEvolucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoEvolucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoEvolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
