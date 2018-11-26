import { Component, OnInit } from '@angular/core';
import { PalavraChaveEstatistica, PalavraChaveEstatisticaApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { AlocacaoPalavraChaveComponent } from '../alocacao-palavra-chave/alocacao-palavra-chave.component';


@Component({
  selector: 'app-melhores-palavras-lista-geral',
  templateUrl: './melhores-palavras-lista-geral.component.html',
  styleUrls: ['./melhores-palavras-lista-geral.component.scss']
})
export class MelhoresPalavrasListaGeralComponent implements OnInit {

  lista: PalavraChaveEstatistica[];
  errMess: string;

  constructor(private srv: PalavraChaveEstatisticaApi,  private dialog: MatDialog) {
  }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    console.log('Vai chamar melhores');
    this.srv.ListaMelhoresPadrao(null)
      .subscribe((result: PalavraChaveEstatistica[]) => {
        console.log('Tamanho lista' , result.length);
        this.lista = result;
      }
        
      );
  }

  selecionouPalavra(itemSelecionado:PalavraChaveEstatistica) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.atualizaLista();
    });
    this.dialog.open(AlocacaoPalavraChaveComponent, {
      width: '800px',
      data: {
        itemSelecionado: itemSelecionado
      }
    });
  }

 




}
