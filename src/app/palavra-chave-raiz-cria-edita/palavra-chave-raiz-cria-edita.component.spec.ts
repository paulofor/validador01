import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveRaizCriaEditaComponent } from './palavra-chave-raiz-cria-edita.component';

describe('PalavraChaveRaizCriaEditaComponent', () => {
  let component: PalavraChaveRaizCriaEditaComponent;
  let fixture: ComponentFixture<PalavraChaveRaizCriaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraChaveRaizCriaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraChaveRaizCriaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
