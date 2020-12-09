import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileHolder } from 'angular2-image-upload';
import { URL_IMAGEM, URL_UPLOAD } from '../constantes/base.url';
import { VersaoTelaApp, VersaoTelaAppApi } from '../shared/sdk';

@Component({
  selector: 'app-imagem-tela-upload',
  templateUrl: './imagem-tela-upload.component.html',
  styleUrls: ['./imagem-tela-upload.component.scss']
})
export class ImagemTelaUploadComponent implements OnInit {

  urlUpload = null;

  versaoTela : VersaoTelaApp;
  objetoNovo : any;

  constructor(public dialogRef:MatDialogRef<ImagemTelaUploadComponent> 
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: VersaoTelaAppApi) { }

  ngOnInit() {
    console.log('data.item:' , this.data.item);
    this.versaoTela = this.data.item;
    this.urlUpload = URL_UPLOAD + '?nome=versaoTela';
  }

  onUploadFinished(item: FileHolder) {
    let urlImagemServer = URL_IMAGEM + '/' + item.serverResponse.response.body.result.files.image[0].name;;
    console.log('urlImagemServer:', urlImagemServer);
    this.versaoTela.imagem1 = urlImagemServer;
  }

  onSubmit() {
    this.servico.updateAttributes(this.versaoTela.id, this.versaoTela)
      .subscribe((resultado) => {
        this.dialogRef.close();
      })
  }
}
