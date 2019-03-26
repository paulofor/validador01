import { Component, OnInit, Inject } from '@angular/core';
import { TelaAppApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-gerencia-tela-app',
  templateUrl: './gerencia-tela-app.component.html',
  styleUrls: ['./gerencia-tela-app.component.scss']
})
export class GerenciaTelaAppComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GerenciaTelaAppComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private servico: TelaAppApi) {
}

  ngOnInit() {
  }

}
