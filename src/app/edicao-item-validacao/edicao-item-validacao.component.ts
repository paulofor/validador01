import { Component, OnInit } from '@angular/core';
import { BASE_URL } from '../constantes/base.url';
import { ProjetoCanvasMySql, ItemValidacaoPagina, ProjetoCanvasMySqlApi, ItemValidacaoPaginaApi, ContainerApi } from '../shared/sdk';
import { Params, ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-edicao-item-validacao',
  templateUrl: './edicao-item-validacao.component.html',
  styleUrls: ['./edicao-item-validacao.component.scss']
})
export class EdicaoItemValidacaoComponent implements OnInit {


  url = BASE_URL + '/api/containers/container1/upload'
  urlImagem = BASE_URL + '/api/containers/container1/download';

  itemValor: ProjetoCanvasMySql;
  signo: ItemValidacaoPagina;
  arquivoSelecionado = null;
  nomeImagemNova: string = '';

  // Isso não esta bom alterar (até 04-10-2018)
  nomeArquivoAlterar: string = '';


  constructor(private itemSrv: ProjetoCanvasMySqlApi,
    private route: ActivatedRoute,
    private signoSrv: ItemValidacaoPaginaApi,
    private containerSrv: ContainerApi,
    private router: Router) { }

  ngOnInit() {
    const segments: UrlSegment[] = this.route.snapshot.url;
    if (this.route.snapshot.url[0].path === 'editaItemValidacao') {

    } else {
      console.log('segments: ', segments);
      this.signo = new ItemValidacaoPagina();
      this.carregaItemValor();
      this.carregaNomeImagemNova();
    }
  }
}


previewImage(event) {
  this.arquivoSelecionado = event.target.files[0];
  this.containerSrv.upload("", this.arquivoSelecionado)
  console.log('Imagem:', this.arquivoSelecionado);
}

carregaNomeImagemNova() {
  this.signoSrv.proximoNomeImagem()
    .subscribe((result) => {

      this.nomeImagemNova = result.nomeImagem;
      console.log('Imagem Nova: ', this.nomeImagemNova);
    })
}


carregaItemValor() {
  this.route.params.subscribe((params: Params) => {
    let id = params['id'];
    console.log('Id: ', id);
    this.itemSrv.findById(id, { "include": "projeto" })
      .subscribe((valor: ProjetoCanvasMySql) => {
        console.log('Item: ' + JSON.stringify(valor));
        this.itemValor = valor;
      })
  });
}

onSubmit() {
  this.signo.projetoCanvasMySqlId = this.itemValor.id;
  this.signo.urlImagem = this.urlImagem + '/' + this.nomeArquivoAlterar;
  console.log("Signo: ", this.signo);
  this.signoSrv
    .create(this.signo, (err, obj) => {
      console.log("Erro:" + err.message);
    }).subscribe((e: any) => {
      console.log(JSON.stringify(e));
      this.router.navigate(['propostaValor']);
    });
}

insereItem() {

}

atualizaItem() {

}

onUploadFinished(item: FileHolder) {
  console.log('onUploadFinished', item.file.name);
  this.nomeArquivoAlterar = item.file.name;
}

}
