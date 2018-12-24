import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadePorProjetoComponent } from './entidade-por-projeto.component';

describe('EntidadePorProjetoComponent', () => {
  let component: EntidadePorProjetoComponent;
  let fixture: ComponentFixture<EntidadePorProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadePorProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadePorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
