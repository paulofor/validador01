import { Component, OnInit } from '@angular/core';
import { RecursoProduto, RecursoProdutoApi } from '../shared/sdk';
import { EditaRecursoProdutoComponent } from '../edita-recurso-produto/edita-recurso-produto.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-recurso-produto',
  templateUrl: './lista-recurso-produto.component.html',
  styleUrls: ['./lista-recurso-produto.component.scss']
})
export class ListaRecursoProdutoComponent implements OnInit {

  listaRecurso: RecursoProduto[];

  constructor(private srv:RecursoProdutoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaRecurso();
  }

  carregaRecurso() {
    let filtro = { 'include' : 'etapaCliente' };
    this.srv.find(filtro) 
      .subscribe((result:RecursoProduto[]) => {
        console.log('Result recursos:' , result);
        result.sort((a:RecursoProduto,b:RecursoProduto) => {
          if (a.desenvolvimento==null) a.desenvolvimento = 0;
          if (b.desenvolvimento==null) b.desenvolvimento = 0;
          return b.desenvolvimento - a.desenvolvimento;
        })
        this.listaRecurso = result;
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaRecurso();
    });
    this.dialog.open(EditaRecursoProdutoComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
}
