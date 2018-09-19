import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-aplicacao',
  templateUrl: './projeto-aplicacao.component.html',
  styleUrls: ['./projeto-aplicacao.component.scss']
})
export class ProjetoAplicacaoComponent implements OnInit {

  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi) {

  }

  ngOnInit() {
    this.projetoService.find()
      .subscribe((projetos: ProjetoMySql[]) =>
        this.projetos = projetos
      );
  }

}
