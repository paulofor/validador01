import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ConceitoProduto, ConceitoProdutoApi, TelaApp } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaTelaAppComponent } from '../edita-tela-app/edita-tela-app.component';


@Component({
  selector: 'app-lista-tela-app',
  templateUrl: './lista-tela-app.component.html',
  styleUrls: ['./lista-tela-app.component.scss']
})
export class ListaTelaAppComponent implements OnInit {

  @Input() conceito: ConceitoProduto;
  lista: TelaApp[];

  constructor(private srv: ConceitoProdutoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.getTelaApps(this.conceito.id, {'include' : ['entidade','entidadePut']})
      .subscribe((result:TelaApp[]) => {
        console.log('Lista de TelaApp: ' , result);
        this.lista = result;
      });
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaLista();
    });
    this.dialog.open(EditaTelaAppComponent, {
      width: '800px',
      data: {
        conceito: this.conceito,
        item: item
      }
    });
  }

}
