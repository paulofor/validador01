import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaProcessoEtapaComponent } from './associa-processo-etapa.component';

describe('AssociaProcessoEtapaComponent', () => {
  let component: AssociaProcessoEtapaComponent;
  let fixture: ComponentFixture<AssociaProcessoEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaProcessoEtapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaProcessoEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
