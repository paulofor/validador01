import { Component, OnInit, Inject } from '@angular/core';
import { ItemValorApp, ItemValorAppApi } from '../shared/sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edita-item-valor-por-projeto',
  templateUrl: './edita-item-valor-por-projeto.component.html',
  styleUrls: ['./edita-item-valor-por-projeto.component.scss']
})
export class EditaItemValorPorProjetoComponent implements OnInit {

  item: ItemValorApp;

  constructor(public dialogRef: MatDialogRef<EditaItemValorPorProjetoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ItemValorAppApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item.id) {
      console.log("fluxo nova");
      this.item = this.data.item;
      //this.item.permiteEdicao = 1;
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
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
