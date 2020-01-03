import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-metrica-mes-produto',
  templateUrl: './metrica-mes-produto.component.html',
  styleUrls: ['./metrica-mes-produto.component.scss']
})
export class MetricaMesProdutoComponent implements OnInit {


  projeto : ProjetoMySql;

  constructor(private srv:ProjetoMySqlApi) { }

  ngOnInit() {
  }

  carregaMes() {
    
  }

}
