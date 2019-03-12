import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAppEditaCriaComponent } from './tela-app-edita-cria.component';

describe('TelaAppEditaCriaComponent', () => {
  let component: TelaAppEditaCriaComponent;
  let fixture: ComponentFixture<TelaAppEditaCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAppEditaCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAppEditaCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
