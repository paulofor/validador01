import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosFaseAnuncioComponent } from './projetos-fase-anuncio.component';

describe('ProjetosFaseAnuncioComponent', () => {
  let component: ProjetosFaseAnuncioComponent;
  let fixture: ComponentFixture<ProjetosFaseAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosFaseAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosFaseAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
