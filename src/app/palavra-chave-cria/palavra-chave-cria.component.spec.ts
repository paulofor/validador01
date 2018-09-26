import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveCriaComponent } from './palavra-chave-cria.component';

describe('PalavraChaveCriaComponent', () => {
  let component: PalavraChaveCriaComponent;
  let fixture: ComponentFixture<PalavraChaveCriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraChaveCriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraChaveCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
