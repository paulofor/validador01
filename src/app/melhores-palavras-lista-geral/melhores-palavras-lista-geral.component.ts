import { Component, OnInit } from '@angular/core';
import { PalavraChaveEstatistica, PalavraChaveEstatisticaApi } from '../shared/sdk';

@Component({
  selector: 'app-melhores-palavras-lista-geral',
  templateUrl: './melhores-palavras-lista-geral.component.html',
  styleUrls: ['./melhores-palavras-lista-geral.component.scss']
})
export class MelhoresPalavrasListaGeralComponent implements OnInit {

  lista: PalavraChaveEstatistica[];
  errMess: string;

  constructor(private srv: PalavraChaveEstatisticaApi) {
  }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    console.log('Vai chamar melhores');
    this.srv.ListaMelhoresPadrao()
      .subscribe((result: PalavraChaveEstatistica[]) => {
        console.log('Tamanho lista' , result.length);
        this.lista = result;
      }
        
      );
  }






}
