import { Component, OnInit, Input } from '@angular/core';
import { Aplicacao } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-aplicacao',
  templateUrl: './detalhe-aplicacao.component.html',
  styleUrls: ['./detalhe-aplicacao.component.scss']
})
export class DetalheAplicacaoComponent implements OnInit {

  @Input() aplicacao: Aplicacao; 

  constructor() { }

  ngOnInit() {
  }

}
