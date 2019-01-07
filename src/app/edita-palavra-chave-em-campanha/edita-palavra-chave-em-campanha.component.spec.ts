import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPalavraChaveEmCampanhaComponent } from './edita-palavra-chave-em-campanha.component';

describe('EditaPalavraChaveEmCampanhaComponent', () => {
  let component: EditaPalavraChaveEmCampanhaComponent;
  let fixture: ComponentFixture<EditaPalavraChaveEmCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaPalavraChaveEmCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPalavraChaveEmCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
