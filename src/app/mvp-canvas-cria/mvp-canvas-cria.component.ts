import { Component, OnInit, Inject } from '@angular/core';

import { ProjetoMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services/custom/ProjetoMySql';

import { MvpCanvasMySql } from '../shared/sdk/models/MvpCanvasMySql';
import { MvpCanvasMySqlApi } from '../shared/sdk/services/custom/MvpCanvasMySql';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-mvp-canvas-cria',
  templateUrl: './mvp-canvas-cria.component.html',
  styleUrls: ['./mvp-canvas-cria.component.scss']
})
export class MvpCanvasCriaComponent implements OnInit {

  projeto: ProjetoMySql;
  tipo: string;
  model: MvpCanvasMySql;  

  constructor(private servico: ProjetoMySqlApi, public dialogRef: MatDialogRef<MvpCanvasCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { }


  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.model));
    this.servico.createMvpCanvasMySqls(this.projeto.id, this.model, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
  }

  ngOnInit() {
    console.log('Data: ', JSON.stringify(this.data));
    this.model = new MvpCanvasMySql();
    this.projeto = this.data.projeto;
    this.tipo = this.data.tipo;
    this.model.projetoMySqlId = this.projeto.id;
    this.model.tipo = this.tipo;


  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }



}
