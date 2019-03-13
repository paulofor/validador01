import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { Aplicacao, AplicacaoApi } from '../shared/sdk';

@Component({
  selector: 'app-edita-aplicacao',
  templateUrl: './edita-aplicacao.component.html',
  styleUrls: ['./edita-aplicacao.component.scss']
})
export class EditaAplicacaoComponent implements OnInit {

  item: Aplicacao;

  constructor(public dialogRef: MatDialogRef<EditaAplicacaoComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: AplicacaoApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new Aplicacao();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id_aplicacao) {
      this.servico.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.servico.updateAttributes(this.item.id_aplicacao, this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }





}
