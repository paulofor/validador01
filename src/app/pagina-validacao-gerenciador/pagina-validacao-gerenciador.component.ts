import { Component, OnInit } from '@angular/core';
import { PaginaValidacaoWeb, ProjetoMySql, ConceitoProduto, ProjetoMySqlApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditaItemValidacaoTelaComponent } from '../edita-item-validacao-tela/edita-item-validacao-tela.component';

@Component({
  selector: 'app-pagina-validacao-gerenciador',
  templateUrl: './pagina-validacao-gerenciador.component.html',
  styleUrls: ['./pagina-validacao-gerenciador.component.scss']
})
export class PaginaValidacaoGerenciadorComponent implements OnInit {

  projeto : ProjetoMySql;
  listaPagina: PaginaValidacaoWeb[];
  conceito: ConceitoProduto;

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi ) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.ProjetoConceitoPaginaValidacao(id)
        .subscribe((result) => {
          console.log('Item: ' + JSON.stringify(result));
          this.projeto = result.projeto;
          this.listaPagina = result.listaPagina;
          this.conceito = result.conceito;
        })
    });
  }

 
}
