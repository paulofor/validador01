import { Component, OnInit } from '@angular/core';
import { ProjetoCanvasMySql, ProjetoCanvasMySqlApi, ItemValidacaoPagina, ItemValidacaoPaginaApi, ContainerApi } from '../shared/sdk';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-detalhe-valor',
  templateUrl: './detalhe-valor.component.html',
  styleUrls: ['./detalhe-valor.component.scss']
})
export class DetalheValorComponent implements OnInit {


  url = 'http://localhost:21101/api/containers/container1/upload';
  urlImagem = 'http://localhost:21101/api/containers/container1/download';

  itemValor: ProjetoCanvasMySql;
  signo: ItemValidacaoPagina;
  arquivoSelecionado = null;
  nomeImagemNova:string = '';

  // Isso não esta bom alterar (até 04-10-2018)
  nomeArquivoAlterar:string = '';

  constructor(private itemSrv: ProjetoCanvasMySqlApi,
              private route: ActivatedRoute,
              private signoSrv: ItemValidacaoPaginaApi,
              private containerSrv: ContainerApi,
              private router: Router) { }

  ngOnInit() {
    this.signo = new ItemValidacaoPagina();
    this.carregaItemValor();
    this.carregaNomeImagemNova();
  }


  previewImage(event) {
    this.arquivoSelecionado = event.target.files[0];
    this.containerSrv.upload("",this.arquivoSelecionado)
    console.log('Imagem:' , this.arquivoSelecionado);
  }

  carregaNomeImagemNova() {
    this.signoSrv.proximoNomeImagem()
      .subscribe((result) => {

        this.nomeImagemNova = result.nomeImagem;
        console.log('Imagem Nova: ' , this.nomeImagemNova);
      })
  }


  carregaItemValor() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('Id: ', id);
      this.itemSrv.findById(id,{"include":"projeto"})
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
      .create(this.signo, (err,obj) => {
      console.log("Erro:" + err.message);
      }).subscribe((e:any)  => { 
        console.log(JSON.stringify(e));
        this.router.navigate(['propostaValor']);
      });
  }

  insereItem() {

  }

  atualizaItem() {
    
  }

  onUploadFinished(item: FileHolder) {
    console.log('onUploadFinished' , item.file.name);
    this.nomeArquivoAlterar = item.file.name;
  }
  
 


}
