import { Component, OnInit } from '@angular/core';
import { TelaWeb, ComponenteWeb, ComponenteWebApi, TelaComponenteWeb, TelaComponenteWebApi } from '../shared/sdk';
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
  selecionado = null;
  rel: TelaComponenteWeb;

  constructor(public dialogRef: MatDialogRef<EscolhaComponenteTelaWebComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ComponenteWebApi,
      private srvRel: TelaComponenteWebApi) {

  }



  ngOnInit() {
    this.rel = new TelaComponenteWeb();
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
    console.log('Item Atual:', this.selecionado);
    console.log('Model: ' + JSON.stringify(this.item));
    this.rel.telaWebId = this.item.id;
    this.rel.componenteWebId = this.selecionado;
    this.srvRel.create(this.rel)
      .subscribe((item) => {
        this.closeDialog();
      })
  }


  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
