import { Component, OnInit, Inject } from '@angular/core';
import { ItemValidacaoPagina, ItemValidacaoPaginaApi, ContainerApi } from '../shared/sdk';
import { URL_UPLOAD, URL_IMAGEM } from '../constantes/base.url';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-edita-cria-item-validacao-projeto',
  templateUrl: './edita-cria-item-validacao-projeto.component.html',
  styleUrls: ['./edita-cria-item-validacao-projeto.component.scss']
})
export class EditaCriaItemValidacaoProjetoComponent implements OnInit {

 

  nomeTela : string;

  item: ItemValidacaoPagina;
  arquivoSelecionado = null;
  nomeImagemNova: string = '';

  // Isso não esta bom alterar (até 04-10-2018)
  nomeArquivoAlterar: string = '';

  urlUpload = URL_UPLOAD;

  constructor(public dialogRef: MatDialogRef<EditaCriaItemValidacaoProjetoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: ItemValidacaoPaginaApi,
    private containerSrv: ContainerApi) { }



  ngOnInit() {
    console.log("Parametro entrada", this.data);
  
      
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new ItemValidacaoPagina();
      this.item.projetoMySqlId = (this.data.projeto?this.data.projeto.id:0);
      this.item.conceitoProdutoId = (this.data.conceito?this.data.conceito.id:0);
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

  /*
  carregaNomeImagemNova() {
    this.servico.proximoNomeImagem()
      .subscribe((result) => {
        this.nomeImagemNova = result.nomeImagem;
        console.log('Imagem Nova: ', this.nomeImagemNova);
      })
  }
  */





 

  onUploadFinished(item: FileHolder) {
    console.log('onUploadFinished', item.file.name);
    this.item.urlImagem = URL_IMAGEM + '/' + item.file.name;
  }

  onUploadFinished2(item: FileHolder) {
    console.log('onUploadFinished2', item.file.name);
    this.item.urlImagem2 = URL_IMAGEM + '/' + item.file.name;
  }
}
