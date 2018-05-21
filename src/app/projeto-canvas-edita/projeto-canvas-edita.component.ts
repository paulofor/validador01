import { Component, OnInit, Inject } from '@angular/core';

import { ProjetoMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services/custom/ProjetoMySql';

import { ProjetoCanvasMySql } from '../shared/sdk/models/ProjetoCanvasMySql';
import { ProjetoCanvasMySqlApi } from '../shared/sdk/services/custom/ProjetoCanvasMySql';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-projeto-canvas-edita',
  templateUrl: './projeto-canvas-edita.component.html',
  styleUrls: ['./projeto-canvas-edita.component.scss']
})
export class ProjetoCanvasEditaComponent implements OnInit {

  projeto: ProjetoMySql;
  tipo: string;
  model: ProjetoCanvasMySql;

  constructor(private servico: ProjetoCanvasMySqlApi, public dialogRef: MatDialogRef<ProjetoCanvasEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { }


  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.model));
    this.servico
      .updateAttributes(this.model.id, this.model, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
  }

  ngOnInit() {
    console.log('Data: ', JSON.stringify(this.data));
    this.model = this.data.edicao;
    this.projeto = this.data.projeto;
    //this.tipo = this.data.tipo;
    //this.model.projetoMySqlId = this.projeto.id;
    //this.model.tipo = this.tipo;


  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
