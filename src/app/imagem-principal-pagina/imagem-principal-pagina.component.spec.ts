import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemPrincipalPaginaComponent } from './imagem-principal-pagina.component';

describe('ImagemPrincipalPaginaComponent', () => {
  let component: ImagemPrincipalPaginaComponent;
  let fixture: ComponentFixture<ImagemPrincipalPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemPrincipalPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemPrincipalPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
