import { Component, OnInit } from '@angular/core';
import { AplicacaoApi, PalavraChaveRaizApi, PalavraChaveRaiz, PalavraChaveEstatistica } from '../shared/sdk';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AlocacaoPalavraChaveComponent } from '../alocacao-palavra-chave/alocacao-palavra-chave.component';

@Component({
  selector: 'app-palavra-chave-raiz-detalhe',
  templateUrl: './palavra-chave-raiz-detalhe.component.html',
  styleUrls: ['./palavra-chave-raiz-detalhe.component.scss']
})
export class PalavraChaveRaizDetalheComponent implements OnInit {

  raiz: PalavraChaveRaiz;

  constructor(private route: ActivatedRoute, private servico: PalavraChaveRaizApi,  private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaRaiz();
  }



  carregaRaiz() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.servico.ObtemComListaMelhoresPadrao(params.get('id'))))
        .subscribe((result: PalavraChaveRaiz[]) => {
          console.log('PalavraChaveRaiz: ' + JSON.stringify(result));
          this.raiz = result[0];
          console.log('Raiz:' , this.raiz);
        })
      
  }



  selecionouPalavra(itemSelecionado:PalavraChaveEstatistica) {
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
