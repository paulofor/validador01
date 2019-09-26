import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, ItemValorApp } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { EditaItemValorPorProjetoComponent } from '../edita-item-valor-por-projeto/edita-item-valor-por-projeto.component';

@Component({
  selector: 'app-lista-item-valor-por-projeto',
  templateUrl: './lista-item-valor-por-projeto.component.html',
  styleUrls: ['./lista-item-valor-por-projeto.component.scss']
})
export class ListaItemValorPorProjetoComponent implements OnInit {


  projeto: ProjetoMySql;

  filtro = { "include": "itemValorApps" };

  constructor(private route: ActivatedRoute, private servico: ProjetoMySqlApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaProjeto();
  }


  carregaProjeto() {
    this.route.params.subscribe((params: Params[]) => {
      let id = params['id'];
      this.servico.findById(id, this.filtro)
        .subscribe((result: ProjetoMySql) => {
          console.log("Result - ListaItemValorPorProjetoComponent: ", JSON.stringify(result));
          this.projeto = result;
        })
    })
  }


  openDialog(item?) {
    if (!item) {
      item = new ItemValorApp();
      item.projetoMySqlId = this.projeto.id;
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaProjeto();
    });
    this.dialog.open(EditaItemValorPorProjetoComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }






}
