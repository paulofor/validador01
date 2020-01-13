import { Component, OnInit } from '@angular/core';
import { IndicadorProdutoApi } from '../shared/sdk';
import { IndicadorProduto } from '../shared/sdk/models';
import { EditaIndicadorProdutoComponent } from '../edita-indicador-produto/edita-indicador-produto.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-indicador-produto',
  templateUrl: './lista-indicador-produto.component.html',
  styleUrls: ['./lista-indicador-produto.component.scss']
})
export class ListaIndicadorProdutoComponent implements OnInit {


  listaIndicador: IndicadorProduto[];

  constructor(private srv: IndicadorProdutoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaIndicador();
  }


  carregaIndicador() {
    this.srv.find()
      .subscribe((result:IndicadorProduto[]) => {
        this.listaIndicador = result;
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaIndicador();
    });
    this.dialog.open(EditaIndicadorProdutoComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
}
