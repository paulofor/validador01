import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';


@Component({
  selector: 'app-lista-projeto-valor',
  templateUrl: './lista-projeto-valor.component.html',
  styleUrls: ['./lista-projeto-valor.component.scss']
})
export class ListaProjetoValorComponent implements OnInit {


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
