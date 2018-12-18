import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoValorTelaComponent } from './projeto-valor-tela.component';

describe('ProjetoValorTelaComponent', () => {
  let component: ProjetoValorTelaComponent;
  let fixture: ComponentFixture<ProjetoValorTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoValorTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoValorTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
