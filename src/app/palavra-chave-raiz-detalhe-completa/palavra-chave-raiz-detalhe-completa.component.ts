import { Component, OnInit } from '@angular/core';
import { PalavraChaveRaiz, PalavraChaveRaizApi, PalavraChaveEstatistica } from '../shared/sdk';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AlocacaoPalavraChaveComponent } from '../alocacao-palavra-chave/alocacao-palavra-chave.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-palavra-chave-raiz-detalhe-completa',
  templateUrl: './palavra-chave-raiz-detalhe-completa.component.html',
  styleUrls: ['./palavra-chave-raiz-detalhe-completa.component.scss']
})
export class PalavraChaveRaizDetalheCompletaComponent implements OnInit {

  raiz: PalavraChaveRaiz;
  filtro = {
    "include": {
      "relation": "palavraChaveEstatisticas", "scope": {
        "order": "volumePesquisa DESC",
        "where": { "maisRecente": 1 }
      }
    }
  }

  constructor(private route: ActivatedRoute, private servico: PalavraChaveRaizApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaRaiz();
  }


  carregaRaiz() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.servico.findById(params.get('id'), this.filtro)))
      .subscribe((result: PalavraChaveRaiz) => {
        console.log('PalavraChaveRaiz: ' + JSON.stringify(result));
        this.raiz = result;
        console.log('Raiz:', this.raiz);
      })

  }

  selecionouPalavra(itemSelecionado: PalavraChaveEstatistica) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaRaiz();
    });
    this.dialog.open(AlocacaoPalavraChaveComponent, {
      width: '800px',
      data: {
        itemSelecionado: itemSelecionado
      }
    });
  }

}
