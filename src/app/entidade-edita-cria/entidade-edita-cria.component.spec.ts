import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeEditaCriaComponent } from './entidade-edita-cria.component';

describe('EntidadeEditaCriaComponent', () => {
  let component: EntidadeEditaCriaComponent;
  let fixture: ComponentFixture<EntidadeEditaCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadeEditaCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeEditaCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
