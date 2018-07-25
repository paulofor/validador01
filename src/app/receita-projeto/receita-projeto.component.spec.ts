import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaProjetoComponent } from './receita-projeto.component';

describe('ReceitaProjetoComponent', () => {
  let component: ReceitaProjetoComponent;
  let fixture: ComponentFixture<ReceitaProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
