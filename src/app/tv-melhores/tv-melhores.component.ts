import { Component, OnInit } from '@angular/core';
import { Cosmetic_OportunidadeDia, Cosmetic_OportunidadeDiaApi } from '../shared/sdk';

@Component({
  selector: 'app-tv-melhores',
  templateUrl: './tv-melhores.component.html',
  styleUrls: ['./tv-melhores.component.scss']
})
export class TvMelhoresComponent  implements OnInit {

  lista: Cosmetic_OportunidadeDia[];

  constructor(private oportunidadeSrv:Cosmetic_OportunidadeDiaApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.oportunidadeSrv.ListaAppMelhoresNatureza(11)
      .subscribe((result:Cosmetic_OportunidadeDia[]) => {
        this.lista = result;
        console.log('lista: ' , this.lista);
      })
  }




}
