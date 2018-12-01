import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoExperienciaEditaComponent } from './tipo-experiencia-edita.component';

describe('TipoExperienciaEditaComponent', () => {
  let component: TipoExperienciaEditaComponent;
  let fixture: ComponentFixture<TipoExperienciaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoExperienciaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoExperienciaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
