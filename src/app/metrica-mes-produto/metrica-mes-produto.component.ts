import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-metrica-mes-produto',
  templateUrl: './metrica-mes-produto.component.html',
  styleUrls: ['./metrica-mes-produto.component.scss']
})
export class MetricaMesProdutoComponent implements OnInit {

  ano = 2020;
  mes = 1;
  idProjeto = 32

  projeto: ProjetoMySql;
  nomeMes : string;

  diaBase : Date = new Date();

  constructor(private srv: ProjetoMySqlApi) { }

 
  ngOnInit() {
    this.nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][this.diaBase.getMonth()];
    this.diaBase = new Date();
    this.carregaMes();
  }

  carregaMes() {
    let filtro = { "include": { "relation": "dsUsuarios", "scope": 
        { 
          "where": { "and": [{ "numMes": this.diaBase.getMonth() + 1 }, { "numAno": this.diaBase.getFullYear() }] }, 
          "order": "dia" 
        } } }
    this.srv.findById(this.idProjeto, filtro)
      .subscribe((resultado: ProjetoMySql) => {
        this.projeto = resultado;
      })


  }

}
