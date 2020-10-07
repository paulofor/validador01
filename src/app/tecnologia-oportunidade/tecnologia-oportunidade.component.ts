import { Component, OnInit } from '@angular/core';
import { Cosmetic_OportunidadeDia, Cosmetic_OportunidadeDiaApi } from '../shared/sdk';



@Component({
  selector: 'app-tecnologia-oportunidade',
  templateUrl: './tecnologia-oportunidade.component.html',
  styleUrls: ['./tecnologia-oportunidade.component.scss']
})
export class TecnologiaOportunidadeComponent implements OnInit {

  lista: Cosmetic_OportunidadeDia[];

  constructor(private oportunidadeSrv:Cosmetic_OportunidadeDiaApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.oportunidadeSrv.ListaAppComputador()
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

}
