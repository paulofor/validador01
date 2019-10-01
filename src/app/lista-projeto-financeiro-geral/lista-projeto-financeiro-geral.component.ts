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

  constructor(private projetoService: ProjetoMySqlApi) {

  }

  ngOnInit() {
    this.projetoService.find({'order' : 'custoCampanha desc'})
      .subscribe((projetos: ProjetoMySql[]) =>
        this.projetos = projetos
      );
  }

}
