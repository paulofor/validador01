import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDetalheComponent } from './setup-detalhe.component';

describe('SetupDetalheComponent', () => {
  let component: SetupDetalheComponent;
  let fixture: ComponentFixture<SetupDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
