import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaConceitoProjetoComponent } from './edita-conceito-projeto.component';

describe('EditaConceitoProjetoComponent', () => {
  let component: EditaConceitoProjetoComponent;
  let fixture: ComponentFixture<EditaConceitoProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaConceitoProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaConceitoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
