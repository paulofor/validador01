import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-palavra-chave',
  templateUrl: './projeto-palavra-chave.component.html',
  styleUrls: ['./projeto-palavra-chave.component.scss']
})
export class ProjetoPalavraChaveComponent implements OnInit {

  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi) { }

  ngOnInit() {
    this.projetoService.ListaPorCodigoProcesso('IDEAB')
    .subscribe((projetos: ProjetoMySql[]) =>
      this.projetos = projetos
    );
  }

}
