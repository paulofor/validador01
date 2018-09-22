import { Component, OnInit, Input } from '@angular/core';
import { Aplicacao } from '../shared/sdk';

@Component({
  selector: 'app-entidade-por-aplicacao',
  templateUrl: './entidade-por-aplicacao.component.html',
  styleUrls: ['./entidade-por-aplicacao.component.scss']
})
export class EntidadePorAplicacaoComponent implements OnInit {


  @Input() aplicacao: Aplicacao;

  constructor() { }

  ngOnInit() {
  }

}
