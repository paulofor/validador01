import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposta-valor',
  templateUrl: './proposta-valor.component.html',
  styleUrls: ['./proposta-valor.component.scss']
})
export class PropostaValorComponent implements OnInit {

  valores: ProjetoMySql[];
  errMess: string;


  constructor(public router: Router, private projetoService: ProjetoMySqlApi) { }

  ngOnInit() {
    this.projetoService.find({"include":{"relation":"projetoCanvasMySqls", "scope": {"where":{"tipo":"VALOR"}}}})
    .subscribe((valores: ProjetoMySql[]) => {
      this.valores = valores;
      console.log('Valores: ' , this.valores);
    });
  }



}
