import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaMelhoriaCampanhaOrigemComponent } from './ideia-melhoria-campanha-origem.component';

describe('IdeiaMelhoriaCampanhaOrigemComponent', () => {
  let component: IdeiaMelhoriaCampanhaOrigemComponent;
  let fixture: ComponentFixture<IdeiaMelhoriaCampanhaOrigemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeiaMelhoriaCampanhaOrigemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeiaMelhoriaCampanhaOrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
