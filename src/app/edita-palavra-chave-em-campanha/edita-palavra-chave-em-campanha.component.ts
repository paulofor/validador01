import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, PalavraChaveGoogle, CampanhaPalavraChaveResultado, CampanhaPalavraChaveResultadoApi } from '../shared/sdk';

@Component({
  selector: 'app-edita-palavra-chave-em-campanha',
  templateUrl: './edita-palavra-chave-em-campanha.component.html',
  styleUrls: ['./edita-palavra-chave-em-campanha.component.scss']
})
export class EditaPalavraChaveEmCampanhaComponent implements OnInit {

  @Input() campanha : CampanhaAds;
  listaPalavra: CampanhaPalavraChaveResultado[];

  constructor(private srv: CampanhaPalavraChaveResultadoApi ) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {

  }

  criaListaNova() {

  }

}
