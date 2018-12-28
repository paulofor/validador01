import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, CampanhaPalavraChaveResultado, CampanhaAdsApi } from '../shared/sdk';

@Component({
  selector: 'app-resultado-campanha-palavra-chave',
  templateUrl: './resultado-campanha-palavra-chave.component.html',
  styleUrls: ['./resultado-campanha-palavra-chave.component.scss']
})
export class ResultadoCampanhaPalavraChaveComponent implements OnInit {

  @Input() campanha: CampanhaAds;
  filtro = {'order' : 'quantidadeClique DESC' , 'include' : 'palavraChaveAds'}

  constructor(private srv: CampanhaAdsApi) { }

  ngOnInit() {
    this.carregaResultados();
  }


  carregaResultados() {
    this.srv.getCampanhaPalavraChaveResultados(this.campanha.id, this.filtro)
      .subscribe((result:CampanhaPalavraChaveResultado[])=> {
        this.campanha.campanhaPalavraChaveResultados = result;
      })
  }

  getCtr(item:CampanhaPalavraChaveResultado) {
    return (item.quantidadeClique>0?((item.quantidadeClique/ item.quantidadeImpressao) * 100 ):0);;
  }
  getCpc(item:CampanhaPalavraChaveResultado) {
    return (item.quantidadeClique>0?(item.custo / item.quantidadeClique):0);
  }
}
