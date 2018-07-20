import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaEditaComponent } from './receita-edita.component';

describe('ReceitaEditaComponent', () => {
  let component: ReceitaEditaComponent;
  let fixture: ComponentFixture<ReceitaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
