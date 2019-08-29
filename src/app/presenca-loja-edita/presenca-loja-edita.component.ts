import { Component, OnInit, Inject } from '@angular/core';
import { PresencaLoja, PresencaLojaApi, ContainerApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { URL_UPLOAD, URL_IMAGEM } from '../constantes/base.url';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-presenca-loja-edita',
  templateUrl: './presenca-loja-edita.component.html',
  styleUrls: ['./presenca-loja-edita.component.scss']
})
export class PresencaLojaEditaComponent implements OnInit {

  urlUploadTela1: string;
  urlUploadTela2: string;
  urlUploadTela3: string;
  urlUploadTela4: string;
  urlUploadTela5: string;
  urlUploadTela6: string;
  urlUploadTela7: string;
  urlUploadTela8: string;

  urlUpload : string;

  item: PresencaLoja;
  arquivoSelecionado = null;

  constructor(public dialogRef: MatDialogRef<PresencaLojaEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: PresencaLojaApi, private containerSrv: ContainerApi) {
  }

  urlImagens() {
    //this.urlUploadTela1 = URL_UPLOAD + '?nome=lojaTela01' + this.item.id;
    //this.urlUploadTela2 = URL_UPLOAD + '?nome=lojaTela02' + this.item.id;
    //this.urlUploadTela3 = URL_UPLOAD + '?nome=lojaTela03' + this.item.id;
    //this.urlUploadTela4 = URL_UPLOAD + '?nome=lojaTela04' + this.item.id;
    //this.urlUploadTela5 = URL_UPLOAD + '?nome=lojaTela05' + this.item.id;
    //this.urlUploadTela6 = URL_UPLOAD + '?nome=lojaTela06' + this.item.id;
    //this.urlUploadTela7 = URL_UPLOAD + '?nome=lojaTela07' + this.item.id;
    //this.urlUploadTela8 = URL_UPLOAD + '?nome=lojaTela08' + this.item.id;
    this.urlUpload = URL_UPLOAD + '?nome=itemLoja' + this.item.id; 
  }



  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item.id) {
      console.log("fluxo nova");
      //this.item = new AnuncioAplicativo();
      this.item = this.data.item;
      //this.item.permiteEdicao = 1;
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      this.urlImagens();
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('(onSubmit)->Model: ' + JSON.stringify(this.item));
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

  /*
  previewImage(event) {
    this.arquivoSelecionado = event.target.files[0];
    this.containerSrv.upload("", this.arquivoSelecionado)
    console.log('Imagem:', this.arquivoSelecionado);
  }
  */

  onUploadFinished1(item: FileHolder) {
    //console.log('onUploadFinished1', item);
    this.item.tela1 = URL_IMAGEM + '/' +  item.serverResponse.response.body.result.files.image[0].name;
    console.log('this.item.tela1', this.item.tela1);
  }

  onUploadFinished2(item: FileHolder) {
    //console.log('onUploadFinished2', item.file.name);
    this.item.tela2 = URL_IMAGEM + '/' +  item.serverResponse.response.body.result.files.image[0].name;
    console.log('this.item.tela2', this.item.tela2);
  }

  onUploadFinished3(item: FileHolder) {
    //console.log('onUploadFinished3', item.file.name);
    this.item.tela3 = URL_IMAGEM + '/' +  item.serverResponse.response.body.result.files.image[0].name;
    console.log('this.item.tela3', this.item.tela3);
  }

  onUploadFinished4(item: FileHolder) {
    //console.log('onUploadFinished4', item.file.name);
    this.item.tela4 = URL_IMAGEM + '/' +  item.serverResponse.response.body.result.files.image[0].name;
    console.log('this.item.tela4', this.item.tela4);
  }


  onUploadFinishedIcone(item: FileHolder) {
    //console.log('onUploadFinished4', item.file.name);
    this.item.icone512x512 = URL_IMAGEM + '/' +  item.serverResponse.response.body.result.files.image[0].name;
    console.log('this.item.icone512x512', this.item.icone512x512);
  }
  onUploadFinishedImagemRet(item: FileHolder) {
    //console.log('onUploadFinished4', item.file.name);
    this.item.imagem1024x500 = URL_IMAGEM + '/' +  item.serverResponse.response.body.result.files.image[0].name;
    console.log('this.item.imagem1024x500', this.item.imagem1024x500);
  }
  onUploadFinishedPrintLoja(item: FileHolder) {
    //console.log('onUploadFinished4', item.file.name);
    this.item.printLoja = URL_IMAGEM + '/' +  item.serverResponse.response.body.result.files.image[0].name;
    console.log('this.item.printLoja', this.item.printLoja);
  }
}
