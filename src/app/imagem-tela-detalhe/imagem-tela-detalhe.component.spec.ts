import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemTelaDetalheComponent } from './imagem-tela-detalhe.component';

describe('ImagemTelaDetalheComponent', () => {
  let component: ImagemTelaDetalheComponent;
  let fixture: ComponentFixture<ImagemTelaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemTelaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemTelaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
