import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorMelhoresComponent } from './computador-melhores.component';

describe('ComputadorMelhoresComponent', () => {
  let component: ComputadorMelhoresComponent;
  let fixture: ComponentFixture<ComputadorMelhoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadorMelhoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorMelhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
