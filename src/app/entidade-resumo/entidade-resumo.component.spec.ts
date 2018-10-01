import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeResumoComponent } from './entidade-resumo.component';

describe('EntidadeResumoComponent', () => {
  let component: EntidadeResumoComponent;
  let fixture: ComponentFixture<EntidadeResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadeResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
