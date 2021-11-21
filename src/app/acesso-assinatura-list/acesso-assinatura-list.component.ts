import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';
import { AcessoAssinatura, AcessoAssinaturaApi } from '../shared/sdk';

@Component({
  selector: 'app-acesso-assinatura-list',
  templateUrl: './acesso-assinatura-list.component.html',
  styleUrls: ['./acesso-assinatura-list.component.scss']
})
export class AcessoAssinaturaListComponent extends BaseListComponent {


    constructor(protected dialog: MatDialog, protected srv:AcessoAssinaturaApi) { 
      super(dialog,srv);
    }
 
    getFiltro() {
      return {
        'order' : 'dataHora desc',
        'limit' : 40
      }
    }

}
