import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoComponenteWebEditaComponent } from './tipo-componente-web-edita.component';

describe('TipoComponenteWebEditaComponent', () => {
  let component: TipoComponenteWebEditaComponent;
  let fixture: ComponentFixture<TipoComponenteWebEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoComponenteWebEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoComponenteWebEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
