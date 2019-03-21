import { Component, OnInit } from '@angular/core';
import { PaletaCor, PaletaCorApi } from '../shared/sdk';
import { EditaPaletaCorComponent } from '../edita-paleta-cor/edita-paleta-cor.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-paleta-cor',
  templateUrl: './lista-paleta-cor.component.html',
  styleUrls: ['./lista-paleta-cor.component.scss']
})
export class ListaPaletaCorComponent implements OnInit {

  listaPaleta: PaletaCor[];


  constructor(private srv: PaletaCorApi, private dialog:MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.find()
      .subscribe((result: PaletaCor[]) => {
        this.listaPaleta = result;
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaLista();
    });
    this.dialog.open(EditaPaletaCorComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

}
