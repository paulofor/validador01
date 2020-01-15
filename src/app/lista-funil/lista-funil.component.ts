import { Component, OnInit } from '@angular/core';
import { FunilNegocio, FunilNegocioApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaFunilComponent } from '../edita-funil/edita-funil.component';

@Component({
  selector: 'app-lista-funil',
  templateUrl: './lista-funil.component.html',
  styleUrls: ['./lista-funil.component.scss']
})
export class ListaFunilComponent implements OnInit {

  listaFunil: FunilNegocio[];

  constructor(private srv: FunilNegocioApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaFunil();
  }

  carregaFunil() {
    this.srv.find()
      .subscribe((result:FunilNegocio[]) => {
        this.listaFunil = result;
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaFunil();
    });
    this.dialog.open(EditaFunilComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

}
