import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaMelhoriaEditaComponent } from './ideia-melhoria-edita.component';

describe('IdeiaMelhoriaEditaComponent', () => {
  let component: IdeiaMelhoriaEditaComponent;
  let fixture: ComponentFixture<IdeiaMelhoriaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeiaMelhoriaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeiaMelhoriaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
