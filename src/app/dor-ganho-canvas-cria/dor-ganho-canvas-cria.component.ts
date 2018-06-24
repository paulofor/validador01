import { Component, OnInit, Inject } from '@angular/core';

import { ProjetoMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services/custom/ProjetoMySql';

import { GanhoDorCanvasMySql } from '../shared/sdk/models';
import { GanhoDorCanvasMySqlApi } from '../shared/sdk/services/custom';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dor-ganho-canvas-cria',
  templateUrl: './dor-ganho-canvas-cria.component.html',
  styleUrls: ['./dor-ganho-canvas-cria.component.scss']
})
export class DorGanhoCanvasCriaComponent implements OnInit {

  projeto: ProjetoMySql;
  tipo: string;
  model: GanhoDorCanvasMySql;  

  constructor(private servico: ProjetoMySqlApi, public dialogRef: 
        MatDialogRef<DorGanhoCanvasCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { }


  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.model));
    this.servico.createGanhoDorCanvasMySqls(this.projeto.id, this.model, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
  }

  ngOnInit() {
    console.log('Data: ', JSON.stringify(this.data));
    this.model = new GanhoDorCanvasMySql();
    this.projeto = this.data.projeto;
    this.tipo = this.data.tipo;
    this.model.projetoMySqlId = this.projeto.id;
    this.model.tipo = this.tipo;


  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }


}
