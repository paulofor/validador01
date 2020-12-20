import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';
import { Projeto, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-campanha-sem-tabela-list',
  templateUrl: './campanha-sem-tabela-list.component.html',
  styleUrls: ['./campanha-sem-tabela-list.component.scss']
})
export class CampanhaSemTabelaListComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:ProjetoMySqlApi){
    super(dialog, srv);
  }


  
}
