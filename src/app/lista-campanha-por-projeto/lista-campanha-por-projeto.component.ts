import { Component, OnInit } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi } from '../shared/sdk';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-campanha-por-projeto',
  templateUrl: './lista-campanha-por-projeto.component.html',
  styleUrls: ['./lista-campanha-por-projeto.component.scss']
})
export class ListaCampanhaPorProjetoComponent implements OnInit {

  listaCampanha: CampanhaAds[];

  constructor(private route:ActivatedRoute, private srv:CampanhaAdsApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.route.params.subscribe((param:Params)=> {
      let idProjeto = param['id'];
      this.srv.GeralPorProjeto(idProjeto)
        .subscribe((resultado:CampanhaAds[]) => {
          this.listaCampanha = resultado;
        })
    })
  }


  getCtr(campanha:CampanhaAds) {
    return (campanha.quantidadeClique>0?((campanha.quantidadeClique/ campanha.quantidadeImpressao) * 100 ):0);;
  }
  getCpc(campanha:CampanhaAds) {
    return (campanha.quantidadeClique>0?(campanha.orcamentoTotalExecutado / campanha.quantidadeClique):0);
  }
}
