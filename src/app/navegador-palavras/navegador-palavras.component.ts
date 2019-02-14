import { Component, OnInit } from '@angular/core';
import { PalavraChaveEstatistica } from '../shared/sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegador-palavras',
  templateUrl: './navegador-palavras.component.html',
  styleUrls: ['./navegador-palavras.component.scss']
})
export class NavegadorPalavrasComponent implements OnInit {

  palavra: PalavraChaveEstatistica;

  constructor(private router : Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

  setPalavra(item) {
    console.log('Evento palavra: ' , item);
  }

  onEscolhePalavra(item) {
    console.log('onEscolhePalavra2: ' , item);
    this.palavra = item;
  }

  isMelhores() {
    return (this.router.url=='/palavraMelhores');
  }

  isBaixoCusto() {
    return (this.router.url=='/melhoresPalavrasBaixoCusto');
  }

}
