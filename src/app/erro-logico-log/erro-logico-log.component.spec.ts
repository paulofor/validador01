import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroLogicoLogComponent } from './erro-logico-log.component';

describe('ErroLogicoLogComponent', () => {
  let component: ErroLogicoLogComponent;
  let fixture: ComponentFixture<ErroLogicoLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroLogicoLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroLogicoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
