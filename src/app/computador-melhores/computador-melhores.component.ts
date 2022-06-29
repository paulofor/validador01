import { Component, OnInit } from '@angular/core';
import { Cosmetic_OportunidadeDia, Cosmetic_OportunidadeDiaApi } from '../shared/sdk';



@Component({
  selector: 'app-computador-melhores',
  templateUrl: './computador-melhores.component.html',
  styleUrls: ['./computador-melhores.component.scss']
})
export class ComputadorMelhoresComponent implements OnInit {

  lista: Cosmetic_OportunidadeDia[];

  constructor(private oportunidadeSrv:Cosmetic_OportunidadeDiaApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.oportunidadeSrv.ListaAppMelhoresComputador()
      .subscribe((result:Cosmetic_OportunidadeDia[]) => {
        this.lista = result;
      })
  }




}
