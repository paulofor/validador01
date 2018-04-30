import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCriaComponent } from './projeto-cria.component';

describe('ProjetoCriaComponent', () => {
  let component: ProjetoCriaComponent;
  let fixture: ComponentFixture<ProjetoCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
