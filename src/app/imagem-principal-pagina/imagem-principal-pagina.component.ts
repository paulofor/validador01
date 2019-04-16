import { Component, OnInit, Input } from '@angular/core';
import { FileHolder } from 'angular2-image-upload';
import { URL_IMAGEM, URL_UPLOAD } from '../constantes/base.url';
import { PaginaValidacaoWebApi } from '../shared/sdk';

@Component({
  selector: 'app-imagem-principal-pagina',
  templateUrl: './imagem-principal-pagina.component.html',
  styleUrls: ['./imagem-principal-pagina.component.scss']
})
export class ImagemPrincipalPaginaComponent implements OnInit {

  @Input() pagina;

  urlUpload: string;

  constructor(private srvPagina: PaginaValidacaoWebApi) { }

  ngOnInit() {
    this.urlUpload = URL_UPLOAD;
    console.log('url-upload: ' , this.urlUpload);
  }


  onUploadFinished(item: FileHolder) {
    console.log('onUploadFinished', item.file.name);
    this.pagina.imagemFundo = URL_IMAGEM + '/' + item.file.name;
    this.srvPagina.updateAttributes(this.pagina.id, this.pagina)
      .subscribe((result: any) => {
        console.log('Resultado: ' , result);
      })
  }
}
