import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DetalhaOportunidadePrecoComponent } from '../detalha-oportunidade-preco/detalha-oportunidade-preco.component';
import { Cosmetic_OportunidadeDiaApi, Cosmetic_OportunidadeDia } from '../shared/sdk';

@Component({
  selector: 'app-cosmetic-center-oportunidade',
  templateUrl: './cosmetic-center-oportunidade.component.html',
  styleUrls: ['./cosmetic-center-oportunidade.component.scss']
})
export class CosmeticCenterOportunidadeComponent implements OnInit {

  lista: Cosmetic_OportunidadeDia[];
  

  constructor(protected dialog: MatDialog, private oportunidadeSrv:Cosmetic_OportunidadeDiaApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.oportunidadeSrv.ListaApp()
      .subscribe((result:Cosmetic_OportunidadeDia[]) => {
        this.lista = result;
      })
  }


  excluiItem(item) {
    this.oportunidadeSrv.deleteById(item.id)
      .subscribe((result) => {
        this.carregaLista();
      })
  }

  precos(itemPrecos) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaLista();
    });
    this.dialog.open(this.getComponente(), {
      width: '600px',
      height: '600px',
      data: {
          item: itemPrecos
      }
    });
  }

  getComponente() : any {
    return DetalhaOportunidadePrecoComponent;
  }
}
