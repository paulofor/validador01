import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoAppEditaComponent } from './versao-app-edita.component';

describe('VersaoAppEditaComponent', () => {
  let component: VersaoAppEditaComponent;
  let fixture: ComponentFixture<VersaoAppEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersaoAppEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersaoAppEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
