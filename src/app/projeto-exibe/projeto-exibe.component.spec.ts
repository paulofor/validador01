import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoExibeComponent } from './projeto-exibe.component';

describe('ProjetoExibeComponent', () => {
  let component: ProjetoExibeComponent;
  let fixture: ComponentFixture<ProjetoExibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoExibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoExibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
