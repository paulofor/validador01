import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjetoMySqlApi, ProjetoCanvasMySql, ItemValidacaoPagina } from '../shared/sdk';
import {DropEvent} from 'ng-drag-drop';

@Component({
  selector: 'app-escolhedor-item-vallidacao',
  templateUrl: './escolhedor-item-vallidacao.component.html',
  styleUrls: ['./escolhedor-item-vallidacao.component.scss']
})
export class EscolhedorItemVallidacaoComponent implements OnInit {

  consulta = { "where": { "tipo": "VALOR" }, "include": { "relation": "itemValidacaoPaginas" } };
  listaValor: ProjetoCanvasMySql[];
  listaItem: ItemValidacaoPagina[] = new Array(0);

  droppedItems: ItemValidacaoPagina[] = new Array(0);

  constructor(public dialogRef: MatDialogRef<EscolhedorItemVallidacaoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srv: ProjetoMySqlApi) {
  }

  ngOnInit() {
    this.carregaListaValor();
  }

  carregaListaValor() {
    this.srv.getProjetoCanvasMySqls(this.data.pagina.projeto.id, this.consulta)
      .subscribe((result: ProjetoCanvasMySql[]) => {
        this.listaValor = result;

        this.montaListaItem();
      })
  }

  montaListaItem() {
    this.listaValor.forEach((valor: ProjetoCanvasMySql) => {
      this.listaItem.push.apply(this.listaItem, valor.itemValidacaoPaginas);
    });
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    console.log('Dropped: ', e.dragData);
    this.droppedItems.push(e.dragData);
  }


  onDrop(e: DropEvent) {
    this.droppedItems.push(e.dragData);
    this.removeItem(e.dragData, this.listaItem)
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}
