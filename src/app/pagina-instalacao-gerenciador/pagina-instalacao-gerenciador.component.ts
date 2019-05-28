import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, PaginaValidacaoWeb, ConceitoProduto, ProjetoMySqlApi, PaginaInstalacaoApp } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-pagina-instalacao-gerenciador',
  templateUrl: './pagina-instalacao-gerenciador.component.html',
  styleUrls: ['./pagina-instalacao-gerenciador.component.scss']
})
export class PaginaInstalacaoGerenciadorComponent implements OnInit {

  projeto: ProjetoMySql;
  listaPagina: PaginaInstalacaoApp[];
  conceito: ConceitoProduto;

  filtro = { "include": "paginaInstalacaoApps" };

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.findById(id, this.filtro)
        .subscribe((result: ProjetoMySql) => {
          console.log('Item: ' + JSON.stringify(result));
          this.projeto = result;
        });
    })
  }
}
