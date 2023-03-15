import { Component, OnInit } from '@angular/core';
import { Cosmetic_OportunidadeDia, Cosmetic_OportunidadeDiaApi } from '../shared/sdk';

@Component({
  selector: 'app-celular-melhores',
  templateUrl: './celular-melhores.component.html',
  styleUrls: ['./celular-melhores.component.scss']
})
export class CelularMelhoresComponent implements OnInit {

  lista: Cosmetic_OportunidadeDia[];

  constructor(private oportunidadeSrv:Cosmetic_OportunidadeDiaApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.oportunidadeSrv.ListaAppMelhoresNatureza(2)
      .subscribe((result:Cosmetic_OportunidadeDia[]) => {
        this.lista = result;
        console.log('lista: ' , this.lista);
      })
  }




}
