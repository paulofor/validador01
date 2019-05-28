import { Component, OnInit, Input } from '@angular/core';
import { ProjetoMySql } from '../shared/sdk';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-gerenciador-pagina-instalacao',
  templateUrl: './gerenciador-pagina-instalacao.component.html',
  styleUrls: ['./gerenciador-pagina-instalacao.component.scss']
})
export class GerenciadorPaginaInstalacaoComponent implements OnInit {


  @Input() projeto:ProjetoMySql;


  constructor(private dialog: MatDialog) { }

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
    this.dialog.open(EditaPaginaInstalacaoAppComponent, {
      width: '800px',
      data: {
        item: this.projeto
      }
    });
  }

}
