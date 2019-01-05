import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaCadProjetoComponent } from '../edita-cad-projeto/edita-cad-projeto.component';

@Component({
  selector: 'app-lista-cad-projeto',
  templateUrl: './lista-cad-projeto.component.html',
  styleUrls: ['./lista-cad-projeto.component.scss']
})
export class ListaCadProjetoComponent implements OnInit {

  listaProjeto: ProjetoMySql[];

  filtro = { 'include' : 'etapaProjeto' };

  constructor(private servico:ProjetoMySqlApi, private dialog : MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.servico.find(this.filtro)
      .subscribe((result:ProjetoMySql[]) => {
        this.listaProjeto = result;
      })
  }

  openDialog(projeto?) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaLista();
    });
    this.dialog.open(EditaCadProjetoComponent, {
      width: '800px',
      data: {
        item: projeto
      }
    });
  }

}
