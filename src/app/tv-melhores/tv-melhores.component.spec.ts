import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMelhoresComponent } from './tv-melhores.component';

describe('TvMelhoresComponent', () => {
  let component: TvMelhoresComponent;
  let fixture: ComponentFixture<TvMelhoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvMelhoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvMelhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
