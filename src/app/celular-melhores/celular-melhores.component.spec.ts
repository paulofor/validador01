import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularMelhoresComponent } from './celular-melhores.component';

describe('CelularMelhoresComponent', () => {
  let component: CelularMelhoresComponent;
  let fixture: ComponentFixture<CelularMelhoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularMelhoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularMelhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
