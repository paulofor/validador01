import { Component, OnInit } from '@angular/core';
import { ConceitoProduto, ProjetoMySql, PaginaValidacaoWeb } from '../shared/sdk';
import { Input } from '@angular/core';
import { EditaPaginaValidacaoWebComponent } from '../edita-pagina-validacao-web/edita-pagina-validacao-web.component';
import { ConceitoProdutoApi } from '../shared/sdk/services';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-gerenciador-pagina-validacao',
  templateUrl: './gerenciador-pagina-validacao.component.html',
  styleUrls: ['./gerenciador-pagina-validacao.component.scss']
})
export class GerenciadorPaginaValidacaoComponent implements OnInit {

  @Input() conceito:ConceitoProduto;
  @Input() projeto:ProjetoMySql;
  listaPagina : PaginaValidacaoWeb[];

  constructor(private servico: ConceitoProdutoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.servico.getPaginaValidacaoWebs(this.conceito.id)
      .subscribe((lista : PaginaValidacaoWeb[]) => {
        this.listaPagina = lista;
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(EditaPaginaValidacaoWebComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

  
}
