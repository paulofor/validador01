import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemValidacaoGerenciadorComponent } from './item-validacao-gerenciador.component';

describe('ItemValidacaoGerenciadorComponent', () => {
  let component: ItemValidacaoGerenciadorComponent;
  let fixture: ComponentFixture<ItemValidacaoGerenciadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemValidacaoGerenciadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemValidacaoGerenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
