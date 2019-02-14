import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PalavraChaveEstatisticaApi, PalavraChaveEstatistica } from '../shared/sdk';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-melhores-palavras-baixo-custo',
  templateUrl: './melhores-palavras-baixo-custo.component.html',
  styleUrls: ['./melhores-palavras-baixo-custo.component.scss']
})
export class MelhoresPalavrasBaixoCustoComponent implements OnInit {

  lista: PalavraChaveEstatistica[];
  errMess: string;

  @Output() escolhePalavra:EventEmitter<PalavraChaveEstatistica> = new EventEmitter<PalavraChaveEstatistica>();

  constructor(private srv: PalavraChaveEstatisticaApi,  private dialog: MatDialog) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    console.log('Vai chamar melhores');
    this.srv.ListaMelhoresBaixoCusto()
      .subscribe((result: PalavraChaveEstatistica[]) => {
        console.log('Tamanho lista' , result.length);
        this.lista = result;
      }
        
      );
  }

  selecionouPalavra(itemSelecionado:PalavraChaveEstatistica) {
    this.escolhePalavra.emit(itemSelecionado);
  }

}
