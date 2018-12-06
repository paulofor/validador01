import { Component, OnInit } from '@angular/core';
import { TelaWeb, ComponenteWeb, ComponenteWebApi } from '../shared/sdk';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-escolha-componente-tela-web',
  templateUrl: './escolha-componente-tela-web.component.html',
  styleUrls: ['./escolha-componente-tela-web.component.scss']
})
export class EscolhaComponenteTelaWebComponent implements OnInit {


  item: TelaWeb;
  listaComponente: ComponenteWeb[];


  constructor(public dialogRef: MatDialogRef<EscolhaComponenteTelaWebComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ComponenteWebApi) {

  }


  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      //this.item = new ProcessoNegocio();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
      this.carregaLista();
    }
  }

  carregaLista() {
    console.log('item para escolha: ', this.item);
    this.servico.find({ "where": { "aplicacaoId": this.item.aplicacaoId } })
      .subscribe((resultado: ComponenteWeb[]) =>
        this.listaComponente = resultado
      );
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
