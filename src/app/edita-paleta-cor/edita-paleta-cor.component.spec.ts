import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPaletaCorComponent } from './edita-paleta-cor.component';

describe('EditaPaletaCorComponent', () => {
  let component: EditaPaletaCorComponent;
  let fixture: ComponentFixture<EditaPaletaCorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaPaletaCorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPaletaCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
