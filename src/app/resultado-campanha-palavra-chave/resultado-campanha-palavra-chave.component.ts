import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, CampanhaPalavraChaveResultado, CampanhaAdsApi } from '../shared/sdk';

@Component({
  selector: 'app-resultado-campanha-palavra-chave',
  templateUrl: './resultado-campanha-palavra-chave.component.html',
  styleUrls: ['./resultado-campanha-palavra-chave.component.scss']
})
export class ResultadoCampanhaPalavraChaveComponent implements OnInit {

  @Input() campanha: CampanhaAds;
  listaResultado: CampanhaPalavraChaveResultado[];
  filtro = {'order' : 'quantidadeClique DESC' }

  constructor(private srv: CampanhaAdsApi) { }

  ngOnInit() {
    this.carregaResultados();
  }


  carregaResultados() {
    this.srv.getCampanhaPalavraChaveResultados(this.campanha.id, this.filtro)
      .subscribe((result:CampanhaPalavraChaveResultado[])=> {
        this.listaResultado = result;
      })
  }

 
}
