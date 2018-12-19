import { Component, OnInit } from '@angular/core';
import { TelaWeb, ConceitoProduto, TelaWebApi } from 'src/app/shared/sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edita-tela-web',
  templateUrl: './edita-tela-web.component.html',
  styleUrls: ['./edita-tela-web.component.scss']
})
export class EditaTelaWebComponent implements OnInit {

  item: TelaWeb;
  conceito: ConceitoProduto;

  constructor(public dialogRef: MatDialogRef<EditaTelaWebComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: TelaWebApi) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.conceito = this.data.conceito;
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new TelaWeb();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.item.conceitoProdutoId = this.conceito.id;
      this.servico.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.servico.updateAttributes(this.item.id, this.item, (err, obj) => {
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
