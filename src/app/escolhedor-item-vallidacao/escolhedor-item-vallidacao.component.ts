import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjetoMySqlApi, ProjetoCanvasMySql, ItemValidacaoPagina, PaginaValidacaoWeb, ItemValidacaoPaginaApi, PaginaInstalacaoApp } from '../shared/sdk';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-escolhedor-item-vallidacao',
  templateUrl: './escolhedor-item-vallidacao.component.html',
  styleUrls: ['./escolhedor-item-vallidacao.component.scss']
})
export class EscolhedorItemVallidacaoComponent implements OnInit {

  //consulta = { "where": { "tipo": "VALOR" }, "include": { "relation": "itemValidacaoPaginas" } };
  listaItemDisponivel: ItemValidacaoPagina[] = new Array(0);

  //droppedItems: ItemValidacaoPagina[] = new Array(0);
  pagina: PaginaValidacaoWeb;
  paginaInstalacao: PaginaInstalacaoApp;


  constructor(public dialogRef: MatDialogRef<EscolhedorItemVallidacaoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private itemValidacaoSrv: ItemValidacaoPaginaApi) {
  }

  ngOnInit() {
    this.carregaListaValor();
  }

  carregaListaValor() {
    if (this.data.pagina) {
      this.pagina = this.data.pagina;
      this.itemValidacaoSrv.disponiveisPorProjeto(this.pagina.projeto.id)
        .subscribe((listaItens: any) => {
          console.log("ListaItens", listaItens);
          this.listaItemDisponivel = listaItens.listaItens;
        })
    }
    if (this.data.paginaInstalacao) {
      this.paginaInstalacao = this.data.paginaInstalacao;
      this.itemValidacaoSrv.disponiveisPorProjeto(this.paginaInstalacao.projeto.id)
        .subscribe((listaItens: any) => {
          console.log("ListaItens", listaItens);
          this.listaItemDisponivel = listaItens.listaItens;
        })
    }
  }




  onDrop(e: DropEvent) {
    let item = <ItemValidacaoPagina>e.dragData;
    if (this.pagina) {
      item.paginaValidacaoWebId = this.pagina.id;
      this.itemValidacaoSrv.updateAttributes(item.id, item)
        .subscribe((result: any) => {
          this.pagina.itemValidacaoPaginas.push(e.dragData);
          this.removeItem(e.dragData, this.listaItemDisponivel)
        })
    }
    if (this.paginaInstalacao) {
      item.paginaInstalacaoAppId = this.paginaInstalacao.id;
      this.itemValidacaoSrv.updateAttributes(item.id, item)
        .subscribe((result: any) => {
          this.paginaInstalacao.itemValidacaoPaginas.push(e.dragData);
          this.removeItem(e.dragData, this.listaItemDisponivel)
        })
    }

  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}
