import { Component, OnInit } from '@angular/core';
import { ValorConceito, ConceitoProduto, ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projeto-gerencia-anuncio',
  templateUrl: './projeto-gerencia-anuncio.component.html',
  styleUrls: ['./projeto-gerencia-anuncio.component.scss']
})
export class ProjetoGerenciaAnuncioComponent implements OnInit {

  listaValor : ValorConceito[];
  conceito : ConceitoProduto;
  projeto : ProjetoMySql;

  constructor(private srv : ProjetoMySqlApi,  private router: ActivatedRoute) { }

  ngOnInit() {
    this.carregaValores();
  }

  carregaValores() {
    this.router.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.ProjetoConceitoPalavraChave(id)
        .subscribe((result) => {
          console.log('Item: ' + JSON.stringify(result));
          this.projeto = result.projeto;
          this.listaValor = result.listaPalavraChave;
          this.conceito = result.conceito;
        })
    });
  }

  editaAnuncio(item?) {

  }

}
