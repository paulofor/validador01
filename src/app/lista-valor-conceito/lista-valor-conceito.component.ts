import { Component, OnInit } from '@angular/core';
import { ConceitoProduto, ValorConceito, ConceitoProdutoApi } from '../shared/sdk';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditaValorConceitoComponent } from '../edita-valor-conceito/edita-valor-conceito.component';

@Component({
  selector: 'app-lista-valor-conceito',
  templateUrl: './lista-valor-conceito.component.html',
  styleUrls: ['./lista-valor-conceito.component.scss']
})
export class ListaValorConceitoComponent implements OnInit {

  @Input() conceito: ConceitoProduto;
  lista: ValorConceito[];

  constructor(private srv: ConceitoProdutoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.getValorConceitos(this.conceito.id)
      .subscribe((result:ValorConceito[]) => {
        this.lista = result;
      });
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaLista();
    });
    this.dialog.open(EditaValorConceitoComponent, {
      width: '800px',
      data: {
        conceito: this.conceito,
        item: item
      }
    });
  }

}
