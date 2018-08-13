import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjetoMySqlApi, ProjetoCanvasMySql, ItemValidacaoPagina, PaginaValidacaoWeb, ItemValidacaoPaginaApi } from '../shared/sdk';
import { DropEvent } from 'ng-drag-drop';

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
  pagina: PaginaValidacaoWeb;

  constructor(public dialogRef: MatDialogRef<EscolhedorItemVallidacaoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srv: ProjetoMySqlApi,
    private itemValidacaoSrv: ItemValidacaoPaginaApi) {
  }

  ngOnInit() {
    this.carregaListaValor();
  }

  carregaListaValor() {
    this.pagina = this.data.pagina;
    this.srv.getProjetoCanvasMySqls(this.pagina.projeto.id, this.consulta)
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
    console.log('onDrop:', e.dragData);
    let item = <ItemValidacaoPagina>e.dragData;
    console.log('Data:', this.data);
    item.paginaValidacaoWebId = this.pagina.id;
    console.log('Pagina:', this.pagina);
    console.log('Item', item);
    this.itemValidacaoSrv.updateAttributes(item.id, item)
      .subscribe((result: any) => {
        console.log('Resultado: ', result);
        this.droppedItems.push(e.dragData);
        this.removeItem(e.dragData, this.listaItem)
      })

  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}
