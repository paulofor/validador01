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
  listaItemDisponivel: ItemValidacaoPagina[] = new Array(0);

  //droppedItems: ItemValidacaoPagina[] = new Array(0);
  pagina: PaginaValidacaoWeb;

  constructor(public dialogRef: MatDialogRef<EscolhedorItemVallidacaoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private itemValidacaoSrv: ItemValidacaoPaginaApi) {
  }

  ngOnInit() {
    this.carregaListaValor();
  }

  carregaListaValor() {
    
    this.pagina = this.data.pagina;
    this.itemValidacaoSrv.disponiveisPorProjeto(this.pagina.projeto.id)
      .subscribe((listaItens: any) => {
        console.log("ListaItens" , listaItens);
        this.listaItemDisponivel = listaItens;
      })
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
        this.pagina.itemValidacaoPaginas.push(e.dragData);
        this.removeItem(e.dragData, this.listaItemDisponivel)
      })

  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}
