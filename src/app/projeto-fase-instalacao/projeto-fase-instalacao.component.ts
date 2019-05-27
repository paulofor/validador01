import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-fase-instalacao',
  templateUrl: './projeto-fase-instalacao.component.html',
  styleUrls: ['./projeto-fase-instalacao.component.scss']
})
export class ProjetoFaseInstalacaoComponent implements OnInit {

  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi) {

  }

  ngOnInit() {
    this.projetoService.ListaPorCodigoProcesso('INSTA')
      .subscribe((projetos: ProjetoMySql[]) =>
        this.projetos = projetos
      );
  }

}
