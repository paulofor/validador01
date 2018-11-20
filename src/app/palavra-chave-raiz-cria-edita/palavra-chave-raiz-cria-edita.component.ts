import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PalavraChaveRaizApi, PalavraChaveRaiz } from '../shared/sdk';

@Component({
  selector: 'app-palavra-chave-raiz-cria-edita',
  templateUrl: './palavra-chave-raiz-cria-edita.component.html',
  styleUrls: ['./palavra-chave-raiz-cria-edita.component.scss']
})
export class PalavraChaveRaizCriaEditaComponent implements OnInit {

  item: PalavraChaveRaiz;
  //aplicacao: Aplicacao;
  //listaAtributo: Atributo_entidade[];

  constructor(public dialogRef: MatDialogRef<PalavraChaveRaizCriaEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: PalavraChaveRaizApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.palavra) {
      console.log("fluxo nova palavra raiz");
      this.item = new PalavraChaveRaiz();
      //this.listaAtributo = [];
      //this.aplicacao = this.data.aplicacao;
      //this.carregaAtributoEntidade();
    } else {
      console.log('fluxo altera palavra');
      this.item = this.data.palavra;
      //this.carregaAtributoEntidade();
      console.log('Item:' , JSON.stringify(this.item));
    }


  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      //this.item.aplicacaoId = this.aplicacao.id_aplicacao;
      this.item.ativo = 1;
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
