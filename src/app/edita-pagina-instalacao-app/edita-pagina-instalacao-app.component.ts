import { Component, OnInit, Inject } from '@angular/core';
import { PaginaInstalacaoApp, PaginaInstalacaoAppApi, PaginaValidacaoWebApi } from '../shared/sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaginaValidacaoWeb } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services';

@Component({
  selector: 'app-edita-pagina-instalacao-app',
  templateUrl: './edita-pagina-instalacao-app.component.html',
  styleUrls: ['./edita-pagina-instalacao-app.component.scss']
})
export class EditaPaginaInstalacaoAppComponent implements OnInit {


  item: PaginaInstalacaoApp;
  listaPaginaValidacao : PaginaValidacaoWeb[];


  constructor(public dialogRef: MatDialogRef<EditaPaginaInstalacaoAppComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: PaginaInstalacaoAppApi,
      private srvProjeto : ProjetoMySqlApi) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new PaginaInstalacaoApp();
      this.item.permiteEdicao = 1;
      console.log('Item: ' , JSON.stringify(this.item));
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      this.carregaPaginaValidacaoProjeto();
      console.log('Item:', JSON.stringify(this.item));
    }
   
  }

  copiaItem(paginaValidacao) {
      this.item.mensagemPrincipal = paginaValidacao.mensagemPrincipal;
      this.item.mensagemSecundaria = paginaValidacao.mensagemSecundaria;
      this.item.marcaLogo = paginaValidacao.marcaLogo;
      this.item.botaoAcao = paginaValidacao.botaoAcao;
  }

  carregaPaginaValidacaoProjeto() {
    this.srvProjeto.ProjetoConceitoPaginaValidacao(this.item.projetoMySqlId) 
      .subscribe((result) => {
        this.listaPaginaValidacao = result.listaPagina;
        console.log('Lista Pagina: ' , this.listaPaginaValidacao);
      })
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      //this.item.projetoMySqlId = this.conceito.projetoMySqlId;
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
