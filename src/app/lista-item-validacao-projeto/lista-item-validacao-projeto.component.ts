import { Component, OnInit } from '@angular/core';
import { ItemValidacaoPagina, ConceitoProduto, ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { EditaCriaItemValidacaoProjetoComponent } from '../edita-cria-item-validacao-projeto/edita-cria-item-validacao-projeto.component';
import { GerenciaTelaAppComponent } from '../gerencia-tela-app/gerencia-tela-app.component';

@Component({
  selector: 'app-lista-item-validacao-projeto',
  templateUrl: './lista-item-validacao-projeto.component.html',
  styleUrls: ['./lista-item-validacao-projeto.component.scss']
})
export class ListaItemValidacaoProjetoComponent implements OnInit {

  listaItemValidacao : ItemValidacaoPagina[] = [];
  conceito: ConceitoProduto;
  projeto: ProjetoMySql;

  constructor(private route:ActivatedRoute, private servico: ProjetoMySqlApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaItemValidacao();
  }

  carregaItemValidacao() {
    this.route.params.subscribe((params:Params[]) => {
      let id = params['id'];
      this.servico.ProjetoConceitoItemValidacao(id)
        .subscribe((result) => {
          console.log("Result - ProjetoConceitoTelaItemValidacao: " , JSON.stringify(result));
          this.conceito = result.conceito;
          this.projeto = result.projeto;
          this.listaItemValidacao = result.listaItemValidacao;
          console.log('projeto:' , this.projeto);
          console.log('conceito:' , this.conceito);
          console.log('listaItemValidacao:' , this.listaItemValidacao);
          //console.log('listaTelaApp:' , this.listaTelaApp);
        })
    })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaItemValidacao();
    });
    this.dialog.open(EditaCriaItemValidacaoProjetoComponent, {
      width: '800px',
      data: {
        item: item,
        conceito : this.conceito,
        projeto : this.projeto
      }
    });
  }

  openTelaAppDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaItemValidacao();
    });
    this.dialog.open(GerenciaTelaAppComponent, {
      width: '800px',
      data: {
        item: item,
        conceito : this.conceito,
        projeto : this.projeto
      }
    });
  }

}
