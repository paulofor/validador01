import { Component, OnInit } from '@angular/core';
import { Cosmetic_OportunidadeDiaApi, Cosmetic_OportunidadeDia } from '../shared/sdk';

@Component({
  selector: 'app-cosmetic-center-oportunidade',
  templateUrl: './cosmetic-center-oportunidade.component.html',
  styleUrls: ['./cosmetic-center-oportunidade.component.scss']
})
export class CosmeticCenterOportunidadeComponent implements OnInit {

  lista: Cosmetic_OportunidadeDia[];

  constructor(private oportunidadeSrv:Cosmetic_OportunidadeDiaApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.oportunidadeSrv.ListaApp()
      .subscribe((result:Cosmetic_OportunidadeDia[]) => {
        this.lista = result;
      })
  }

}
