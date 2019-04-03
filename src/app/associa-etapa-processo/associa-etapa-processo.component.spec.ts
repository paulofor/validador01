import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaEtapaProcessoComponent } from './associa-etapa-processo.component';

describe('AssociaEtapaProcessoComponent', () => {
  let component: AssociaEtapaProcessoComponent;
  let fixture: ComponentFixture<AssociaEtapaProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaEtapaProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaEtapaProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
