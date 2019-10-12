import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, AnuncioAplicativo, AnuncioAplicativoApi } from '../shared/sdk';

@Component({
  selector: 'app-display-anuncio-aplicacao',
  templateUrl: './display-anuncio-aplicacao.component.html',
  styleUrls: ['./display-anuncio-aplicacao.component.scss']
})
export class DisplayAnuncioAplicacaoComponent implements OnInit {

  @Input() campanha: CampanhaAds;

  anuncioApp: AnuncioAplicativo;

  constructor(private srv: AnuncioAplicativoApi) { }

  ngOnInit() {
    if (this.campanha.presencaLojaId!=0)
      this.carregaItem();
  }

  carregaItem() {
    let filtro = { "include" : { "relation" : "anuncioAplicacaoResultados" , "scope" : { "where" : {"campanhaAdsId" : this.campanha.id } } } }
    this.srv.findById(this.campanha.anuncioAplicativoId, filtro )
      .subscribe((result: AnuncioAplicativo) => {
        this.anuncioApp = result;
      })
  }


}
