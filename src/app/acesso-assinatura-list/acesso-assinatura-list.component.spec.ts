import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoAssinaturaListComponent } from './acesso-assinatura-list.component';

describe('AcessoAssinaturaListComponent', () => {
  let component: AcessoAssinaturaListComponent;
  let fixture: ComponentFixture<AcessoAssinaturaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoAssinaturaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoAssinaturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
