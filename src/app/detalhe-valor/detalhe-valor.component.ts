import { Component, OnInit } from '@angular/core';
import { ProjetoCanvasMySql, ProjetoCanvasMySqlApi, ItemValidacaoPagina, ItemValidacaoPaginaApi } from '../shared/sdk';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-valor',
  templateUrl: './detalhe-valor.component.html',
  styleUrls: ['./detalhe-valor.component.scss']
})
export class DetalheValorComponent implements OnInit {

  itemValor: ProjetoCanvasMySql;
  signo: ItemValidacaoPagina;
  arquivoSelecionado = null;

  constructor(private itemSrv: ProjetoCanvasMySqlApi,
              private route: ActivatedRoute,
              private signoSrv: ItemValidacaoPaginaApi,
              private router: Router) { }

  ngOnInit() {
    this.signo = new ItemValidacaoPagina();
    this.carregaItemValor();
  }


  previewImage(event) {
    this.arquivoSelecionado = event.target.files[0];
    console.log('Imagem:' , this.arquivoSelecionado);
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

}
