import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-lista-projeto-financeiro-geral',
  templateUrl: './lista-projeto-financeiro-geral.component.html',
  styleUrls: ['./lista-projeto-financeiro-geral.component.scss']
})
export class ListaProjetoFinanceiroGeralComponent implements OnInit {

  projetos: ProjetoMySql[];
  errMess: string;

  total: ProjetoMySql = new ProjetoMySql();
  valorTotal: number;

  constructor(private projetoService: ProjetoMySqlApi) {

  }

  ngOnInit() {
    this.projetoService.find({'order' : 'custoCampanha desc'})
      .subscribe((projetos: ProjetoMySql[]) =>
        this.calculaTotal(projetos)
      );
  }

  calculaTotal(projetos) {
    this.projetos = projetos
    this.total = new ProjetoMySql();
    console.log('Total:' , this.total);
    this.total.custoCampanha = 0;
    //projetos.forEach(function (projeto) {
    //  if (projeto.custoCampanha)
    //    total.custoCampanha += projeto.custoCampanha;
    //}); 
    this.calculaValorTotal();
  }

  calculaValorTotal() {
    this.valorTotal = 0;
    for (var i=0; i < this.projetos.length; i++) {
      var item = this.projetos[i];
      this.valorTotal += item.custoCampanha;
    }
    console.log('Total:' , this.valorTotal);
  }

  
}
