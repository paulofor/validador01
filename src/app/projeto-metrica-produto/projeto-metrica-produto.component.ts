import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-metrica-produto',
  templateUrl: './projeto-metrica-produto.component.html',
  styleUrls: ['./projeto-metrica-produto.component.scss']
})
export class ProjetoMetricaProdutoComponent implements OnInit {

  projetos : ProjetoMySql[];

  mes: number;
  ano: number;

  constructor(private srv: ProjetoMySqlApi) { }

  ngOnInit() {
    this.carregaProjeto();
    this.montaData();
  }

  carregaProjeto() {
    this.srv.find()
      .subscribe((result: ProjetoMySql[]) => {
        this.projetos = result;
      })
  }

  montaData() {
    let dataAtual = new Date();
    this.mes = dataAtual.getMonth() + 1;
    this.ano = dataAtual.getFullYear();
  }

}
