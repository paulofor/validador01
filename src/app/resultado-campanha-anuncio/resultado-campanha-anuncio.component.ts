import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi, CampanhaAnuncioResultado } from '../shared/sdk';

@Component({
  selector: 'app-resultado-campanha-anuncio',
  templateUrl: './resultado-campanha-anuncio.component.html',
  styleUrls: ['./resultado-campanha-anuncio.component.scss']
})
export class ResultadoCampanhaAnuncioComponent implements OnInit {

  @Input() campanha: CampanhaAds;

  filtro = {'include' : 'anuncioAds' , 'order' : 'quantidadeClique DESC'};

  constructor(private srv: CampanhaAdsApi) { }

  ngOnInit() {
    this.carregaResultados();
  }

  carregaResultados() {
    this.srv.getCampanhaAnuncioResultados(this.campanha.id, this.filtro)
      .subscribe((result:CampanhaAnuncioResultado[])=> {
        this.campanha.campanhaAnuncioResultados = result;
      })
  }


}
