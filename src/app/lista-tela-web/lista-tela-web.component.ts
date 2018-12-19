import { Component, OnInit } from '@angular/core';
import { TelaWeb, ConceitoProdutoApi, ConceitoProduto } from '../shared/sdk';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditaTelaWebComponent } from '../edita-tela-web/edita-tela-web.component';

@Component({
  selector: 'app-lista-tela-web',
  templateUrl: './lista-tela-web.component.html',
  styleUrls: ['./lista-tela-web.component.scss']
})
export class ListaTelaWebComponent implements OnInit {

  @Input() conceito: ConceitoProduto;
  lista: TelaWeb[];

  constructor(private srv: ConceitoProdutoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.getTelaWebs(this.conceito.id)
      .subscribe((result:TelaWeb[]) => {
        this.lista = result;
      });
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaLista();
    });
    this.dialog.open(EditaTelaWebComponent, {
      width: '800px',
      data: {
        conceito: this.conceito,
        item: item
      }
    });
  }

}
