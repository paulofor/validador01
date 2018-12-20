import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projetos-fase-anuncio',
  templateUrl: './projetos-fase-anuncio.component.html',
  styleUrls: ['./projetos-fase-anuncio.component.scss']
})
export class ProjetosFaseAnuncioComponent implements OnInit {

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
