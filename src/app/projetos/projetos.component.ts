import { Component, OnInit } from '@angular/core';



import { ProjetoMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services/custom/ProjetoMySql';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';
import { ProjetoEditaComponent } from '../projeto-edita/projeto-edita.component';



@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})

export class ProjetosComponent extends BaseListComponent  {

  constructor(protected dialog: MatDialog, protected srv:ProjetoMySqlApi, private router: Router) {
    super(dialog, srv);
  }


  getComponente() {
    return ProjetoEditaComponent;
  }
  goCanvas(id: number){        
    this.router.navigate(['projetoCanvas/' + id]);
  }


}
