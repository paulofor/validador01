import { Component, OnInit } from '@angular/core';
import { URL_IMAGEM, URL_UPLOAD } from '../constantes/base.url';
import { ProjetoCanvasMySql, ItemValidacaoPagina, ProjetoCanvasMySqlApi, ItemValidacaoPaginaApi, ContainerApi } from '../shared/sdk';
import { Params, ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-edicao-item-validacao',
  templateUrl: './edicao-item-validacao.component.html',
  styleUrls: ['./edicao-item-validacao.component.scss']
})
export class EdicaoItemValidacaoComponent implements OnInit {


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
    console.log('Segments:' , segments);
    if (this.route.snapshot.url[0].path === 'editaItemValidacao') {

      this.route.params.subscribe((params: Params) => {
        let id = params['id'];
        console.log('IdProjeto: ', id);
        this.signoSrv.findById(id, { "include" : "projetoCanvasMySql" })
        .subscribe((result: ItemValidacaoPagina) => {
          console.log('Resultado: ' , result);
          this.signo = result;
          this.itemValor = this.signo.projetoCanvasMySql;
        })
      });

   
    } else {
      console.log('segments: ', segments);
      this.signo = new ItemValidacaoPagina();
      this.carregaItemValor();
      this.carregaNomeImagemNova();

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
    if (this.route.snapshot.url[0].path === 'editaItemValidacao') {
      this.atualizaItem();
    } else {
      this.insereItem();
    }
  }

  insereItem() {
    this.signo.projetoCanvasMySqlId = this.itemValor.id;
    console.log("Signo: ", this.signo);
    this.signoSrv
      .create(this.signo, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.router.navigate(['projetosValor/'  + this.itemValor.projetoMySqlId]);
      });
  }

  atualizaItem() {
    this.signoSrv
      .updateAttributes(this.signo.id, this.signo, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        console.log('Navegacao: projetosValor/' + this.itemValor.projetoMySqlId);
        this.router.navigate(['projetosValor/' + this.itemValor.projetoMySqlId ]);
      });
  }

  onUploadFinished(item: FileHolder) {
    console.log('onUploadFinished', item.file.name);
    this.signo.urlImagem = URL_IMAGEM + '/' + item.file.name;
  }

}
