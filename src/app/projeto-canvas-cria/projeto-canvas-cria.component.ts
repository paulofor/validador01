import { Component, OnInit, Inject } from '@angular/core';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-projeto-canvas-cria',
  templateUrl: './projeto-canvas-cria.component.html',
  styleUrls: ['./projeto-canvas-cria.component.scss']
})
export class ProjetoCanvasCriaComponent implements OnInit {

  projeto : Projeto;
  tipo: string;

  constructor(public dialogRef: MatDialogRef<ProjetoCanvasCriaComponent>
    ,@Inject(MAT_DIALOG_DATA) public data:any) { }


  onSubmit() {
    
  }

  ngOnInit() {
    console.log('Data: ' , JSON.stringify(this.data));
    this.projeto = this.data.projeto;
    this.tipo = this.data.tipo;
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
