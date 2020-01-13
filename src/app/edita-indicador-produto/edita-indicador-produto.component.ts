import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { IndicadorProdutoApi, IndicadorProduto } from '../shared/sdk';

@Component({
  selector: 'app-edita-indicador-produto',
  templateUrl: './edita-indicador-produto.component.html',
  styleUrls: ['./edita-indicador-produto.component.scss']
})
export class EditaIndicadorProdutoComponent implements OnInit {

  item : IndicadorProduto;

  constructor(public dialogRef: MatDialogRef<EditaIndicadorProdutoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: IndicadorProdutoApi) {
  }

  ngOnInit() {
    if (!this.data.item) {
      this.item = new IndicadorProduto();
    } else {
      this.item = this.data.item;
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
