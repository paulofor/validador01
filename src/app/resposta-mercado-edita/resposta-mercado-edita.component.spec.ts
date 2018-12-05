import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaMercadoEditaComponent } from './resposta-mercado-edita.component';

describe('RespostaMercadoEditaComponent', () => {
  let component: RespostaMercadoEditaComponent;
  let fixture: ComponentFixture<RespostaMercadoEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaMercadoEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaMercadoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
