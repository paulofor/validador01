import { Component, OnInit } from '@angular/core';
import { ConceitoProduto, ProjetoMySql, TelaWeb, TelaApp, ProjetoMySqlApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';
import { EditaItemValidacaoTelaComponent } from '../edita-item-validacao-tela/edita-item-validacao-tela.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-item-validacao-gerenciador',
  templateUrl: './item-validacao-gerenciador.component.html',
  styleUrls: ['./item-validacao-gerenciador.component.scss']
})
export class ItemValidacaoGerenciadorComponent implements OnInit {

  conceito: ConceitoProduto;
  projeto: ProjetoMySql;
  listaTelaWeb : TelaWeb[];
  listaTelaApp : TelaApp[];

  constructor(private route:ActivatedRoute, private servico: ProjetoMySqlApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaItens();
  }

  carregaItens() {
    this.route.params.subscribe((params:Params[]) => {
      let id = params['id'];
      this.servico.ProjetoConceitoTelaItemValidacao(id)
        .subscribe((result) => {
          console.log("ProjetoConceitoTelaItemValidacao: " , JSON.stringify(result));
          this.conceito = result.conceito;
          this.projeto = result.projeto;
          this.listaTelaApp = result.listaTelaApp;
          this.listaTelaWeb = result.listaTelaWeb;
          console.log('listaTelaApp:' , this.listaTelaApp);
        })
    })
  }
  openTelaApp(tela, item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaItens();
    });
    this.dialog.open(EditaItemValidacaoTelaComponent, {
      width: '800px',
      data: {
        item: item,
        telaApp : tela
      }
    });
  }
  openTelaWeb(tela, item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaItens();
    });
    this.dialog.open(EditaItemValidacaoTelaComponent, {
      width: '800px',
      data: {
        item: item,
        telaWeb : tela
      }
    });
  }
}
