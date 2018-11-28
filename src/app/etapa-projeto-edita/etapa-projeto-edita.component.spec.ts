import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaProjetoEditaComponent } from './etapa-projeto-edita.component';

describe('EtapaProjetoEditaComponent', () => {
  let component: EtapaProjetoEditaComponent;
  let fixture: ComponentFixture<EtapaProjetoEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaProjetoEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaProjetoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
