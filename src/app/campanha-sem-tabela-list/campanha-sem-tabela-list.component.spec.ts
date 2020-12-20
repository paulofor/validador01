import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaSemTabelaListComponent } from './campanha-sem-tabela-list.component';

describe('CampanhaSemTabelaListComponent', () => {
  let component: CampanhaSemTabelaListComponent;
  let fixture: ComponentFixture<CampanhaSemTabelaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaSemTabelaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaSemTabelaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
