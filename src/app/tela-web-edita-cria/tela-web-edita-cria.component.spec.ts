import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaWebEditaCriaComponent } from './tela-web-edita-cria.component';

describe('TelaWebEditaCriaComponent', () => {
  let component: TelaWebEditaCriaComponent;
  let fixture: ComponentFixture<TelaWebEditaCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaWebEditaCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaWebEditaCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
