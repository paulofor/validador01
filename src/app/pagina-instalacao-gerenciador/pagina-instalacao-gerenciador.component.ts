import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, PaginaValidacaoWeb, ConceitoProduto, ProjetoMySqlApi } from 'src/app/shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-pagina-instalacao-gerenciador',
  templateUrl: './pagina-instalacao-gerenciador.component.html',
  styleUrls: ['./pagina-instalacao-gerenciador.component.scss']
})
export class PaginaInstalacaoGerenciadorComponent implements OnInit {

  projeto : ProjetoMySql;
  listaPagina: PaginaInstacaoApp[];
  conceito: ConceitoProduto;

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi ) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.ProjetoConceitoPaginaInstalacao(id)
        .subscribe((result) => {
          console.log('Item: ' + JSON.stringify(result));
          this.projeto = result.projeto;
          this.listaPagina = result.listaPagina;
          this.conceito = result.conceito;
        })
    });
  }

}
