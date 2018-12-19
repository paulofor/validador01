import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { ProjetoMySqlApi, ProjetoMySql, PalavraChaveEstatistica, ConceitoProduto } from '../shared/sdk';

@Component({
  selector: 'app-projeto-valor-tela',
  templateUrl: './projeto-valor-tela.component.html',
  styleUrls: ['./projeto-valor-tela.component.scss']
})
export class ProjetoValorTelaComponent implements OnInit {

  projeto : ProjetoMySql;
  listaPalavra: PalavraChaveEstatistica[];
  conceito: ConceitoProduto;

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi ) { }

  ngOnInit() {
    this.carregaDados();
  }


  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.ProjetoConceitoPalavraChave(id)
        .subscribe((result) => {
          console.log('Item: ' + JSON.stringify(result));
          this.projeto = result.projeto;
          this.listaPalavra = result.listaPalavraChave;
          this.conceito = result.conceito;
        })
    });
  }
}
