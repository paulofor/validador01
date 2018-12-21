import { Component, OnInit } from '@angular/core';
import { ValorConceito, ConceitoProduto, ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AnuncioAdsEditaValorConceitoComponent } from '../anuncio-ads-edita-valor-conceito/anuncio-ads-edita-valor-conceito.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-projeto-gerencia-anuncio',
  templateUrl: './projeto-gerencia-anuncio.component.html',
  styleUrls: ['./projeto-gerencia-anuncio.component.scss']
})
export class ProjetoGerenciaAnuncioComponent implements OnInit {

  listaValor : ValorConceito[];
  conceito : ConceitoProduto;
  projeto : ProjetoMySql;

  constructor(private srv : ProjetoMySqlApi,  private router: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaValores();
  }

  carregaValores() {
    this.router.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.ConceitoValorAnuncioPorProjeto(id)
        .subscribe((result) => {
          console.log('Item: ' + JSON.stringify(result));
          this.projeto = result.projeto;
          this.listaValor = result.listaValorAnuncio;
          this.conceito = result.conceito;
        })
    });
  }



  editaAnuncio(valorEnt,itemEnt?) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaValores();
    });
    this.dialog.open(AnuncioAdsEditaValorConceitoComponent, {
      width: '800px',
      data: {
        valor : valorEnt,
        item: itemEnt
      }
    });
  }


}
