import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { ConceitoProduto, ConceitoProdutoApi, ProjetoMySql } from '../shared/sdk';

@Component({
  selector: 'app-conceito-produto-edita',
  templateUrl: './conceito-produto-edita.component.html',
  styleUrls: ['./conceito-produto-edita.component.scss']
})
export class ConceitoProdutoEditaComponent implements OnInit {

  item: ConceitoProduto;
  projeto : ProjetoMySql;

  constructor(public dialogRef: MatDialogRef<ConceitoProdutoEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ConceitoProdutoApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.projeto = this.data.projeto;
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new ConceitoProduto();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.item.projetoMySqlId = this.projeto.id;
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
