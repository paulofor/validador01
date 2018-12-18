import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, PalavraChaveEstatisticaApi, PalavraChaveEstatistica } from '../shared/sdk';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-projeto-conceito-produto',
  templateUrl: './projeto-conceito-produto.component.html',
  styleUrls: ['./projeto-conceito-produto.component.scss']
})
export class ProjetoConceitoProdutoComponent implements OnInit {
  
  projeto: ProjetoMySql;
  lista:PalavraChaveEstatistica[];

  
  ngOnInit(): void {
    this.carregaDados();
  }

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi,
          private srvPalavraChave:PalavraChaveEstatisticaApi) { }


  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.findById(id)
        .subscribe((valor: ProjetoMySql) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.projeto = valor;
          this.carregaPalavraChave();
        })
    });
  }

  carregaPalavraChave() {
    this.srvPalavraChave.ListaPorIdProjeto(this.projeto.id)
      .subscribe((result:PalavraChaveEstatistica[]) => {
        this.lista = result;
      })
  }





}
