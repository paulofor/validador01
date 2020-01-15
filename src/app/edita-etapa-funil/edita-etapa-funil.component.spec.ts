import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaEtapaFunilComponent } from './edita-etapa-funil.component';

describe('EditaEtapaFunilComponent', () => {
  let component: EditaEtapaFunilComponent;
  let fixture: ComponentFixture<EditaEtapaFunilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaEtapaFunilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaEtapaFunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
