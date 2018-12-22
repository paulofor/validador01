import { Component, OnInit, Inject } from '@angular/core';
import { ItemValidacaoPagina, ProjetoCanvasMySqlApi, ItemValidacaoPaginaApi, ContainerApi, ProjetoCanvasMySql, TelaApp, TelaWeb } from '../shared/sdk';
import { URL_UPLOAD, URL_IMAGEM } from '../constantes/base.url';
import { ActivatedRoute, Router, UrlSegment, Params } from '@angular/router';
import { FileHolder } from 'angular2-image-upload';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edita-item-validacao-tela',
  templateUrl: './edita-item-validacao-tela.component.html',
  styleUrls: ['./edita-item-validacao-tela.component.scss']
})
export class EditaItemValidacaoTelaComponent implements OnInit {

  telaApp: TelaApp;
  telaWeb: TelaWeb;
  nomeTela : string;

  item: ItemValidacaoPagina;
  arquivoSelecionado = null;
  nomeImagemNova: string = '';

  // Isso não esta bom alterar (até 04-10-2018)
  nomeArquivoAlterar: string = '';

  urlUpload = URL_UPLOAD;

  constructor(public dialogRef: MatDialogRef<EditaItemValidacaoTelaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: ItemValidacaoPaginaApi,
    private containerSrv: ContainerApi) { }



  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.telaApp = this.data.telaApp;
    this.telaWeb = this.data.telaWeb;
    if (this.telaApp) {
      this.nomeTela = this.telaApp.nome + ' (App)';
    }
    if (this.telaWeb) {
      this.nomeTela = this.telaWeb + ' (Web)';
    }
      
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new ItemValidacaoPagina();
      this.item.telaAppId = (this.telaApp?this.telaApp.id:0);
      this.item.telaWebId = (this.telaWeb?this.telaWeb.id:0);
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


  previewImage(event) {
    this.arquivoSelecionado = event.target.files[0];
    this.containerSrv.upload("", this.arquivoSelecionado)
    console.log('Imagem:', this.arquivoSelecionado);
  }

  carregaNomeImagemNova() {
    this.servico.proximoNomeImagem()
      .subscribe((result) => {
        this.nomeImagemNova = result.nomeImagem;
        console.log('Imagem Nova: ', this.nomeImagemNova);
      })
  }





 

  onUploadFinished(item: FileHolder) {
    console.log('onUploadFinished', item.file.name);
    this.item.urlImagem = URL_IMAGEM + '/' + item.file.name;
  }

}
