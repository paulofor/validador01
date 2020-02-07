import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaVersaoRecursoComponent } from './edita-versao-recurso.component';

describe('EditaVersaoRecursoComponent', () => {
  let component: EditaVersaoRecursoComponent;
  let fixture: ComponentFixture<EditaVersaoRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaVersaoRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaVersaoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
