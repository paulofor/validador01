import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-etapa-valor',
  templateUrl: './projeto-etapa-valor.component.html',
  styleUrls: ['./projeto-etapa-valor.component.scss']
})
export class ProjetoEtapaValorComponent implements OnInit {


  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi) {

  }

  ngOnInit() {
    this.projetoService.ListaPorCodigoEtapa('IDVAL')
      .subscribe((projetos: ProjetoMySql[]) =>
        this.projetos = projetos
      );
  }

}
