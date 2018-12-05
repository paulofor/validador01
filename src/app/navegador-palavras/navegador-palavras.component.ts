import { Component, OnInit } from '@angular/core';
import { PalavraChaveEstatistica } from '../shared/sdk';

@Component({
  selector: 'app-navegador-palavras',
  templateUrl: './navegador-palavras.component.html',
  styleUrls: ['./navegador-palavras.component.scss']
})
export class NavegadorPalavrasComponent implements OnInit {

  palavra: PalavraChaveEstatistica;

  constructor() { }

  ngOnInit() {
  }

  setPalavra(item) {
    console.log('Evento palavra: ' , item);
  }

  onEscolhePalavra(item) {
    console.log('onEscolhePalavra2: ' , item);
    this.palavra = item;
  }

}
