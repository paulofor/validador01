import { Component, OnInit, Inject } from '@angular/core';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';

import { ProjetoCanvas } from '../shared/sdk/models/ProjetoCanvas';
import { ProjetoCanvasApi } from '../shared/sdk/services/custom/ProjetoCanvas';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-projeto-canvas-cria',
  templateUrl: './projeto-canvas-cria.component.html',
  styleUrls: ['./projeto-canvas-cria.component.scss']
})
export class ProjetoCanvasCriaComponent implements OnInit {

  projeto : Projeto;
  tipo: string;
  model : ProjetoCanvas;

  constructor(private servico: ProjetoApi, public dialogRef: MatDialogRef<ProjetoCanvasCriaComponent>
    ,@Inject(MAT_DIALOG_DATA) public data:any) { }


  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.model));
    this.servico
    .createProjetoCanvasRel(this.projeto.id, this.model, (err,obj) => {
    console.log("Erro:" + err.message);
    }).subscribe((e:any)  => { 
      console.log(JSON.stringify(e));
      
    });
  }

  ngOnInit() {
    console.log('Data: ' , JSON.stringify(this.data));
    this.model = new ProjetoCanvas();
    this.projeto = this.data.projeto;
    this.tipo = this.data.tipo;
    this.model.idProjeto = this.projeto.id;
    this.model.tipo  = this.tipo;

   
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
