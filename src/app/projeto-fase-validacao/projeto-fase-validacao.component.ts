import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-fase-validacao',
  templateUrl: './projeto-fase-validacao.component.html',
  styleUrls: ['./projeto-fase-validacao.component.scss']
})
export class ProjetoFaseValidacaoComponent implements OnInit {


  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi) {

  }

  ngOnInit() {
    this.projetoService.ListaPorCodigoProcesso('CMPNHA')
      .subscribe((projetos: ProjetoMySql[]) =>
        this.projetos = projetos
      );
  }

}
