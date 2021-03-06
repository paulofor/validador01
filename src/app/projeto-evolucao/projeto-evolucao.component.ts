import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-projeto-evolucao',
  templateUrl: './projeto-evolucao.component.html',
  styleUrls: ['./projeto-evolucao.component.scss']
})
export class ProjetoEvolucaoComponent implements OnInit {

  projeto: ProjetoMySql


  constructor(private srv: ProjetoMySqlApi, private router : ActivatedRoute) { }

  ngOnInit() {
    this.carregaProjeto();
  }

  carregaProjeto() {
    this.router.params.subscribe((params:Params) => {
      let id = params['id'];
    
      this.srv.ConsolidadoCampanha(id)
        .subscribe((result:ProjetoMySql) => {
          console.log('Projeto', result);
          this.projeto = result;
        })
    })
  }

}
