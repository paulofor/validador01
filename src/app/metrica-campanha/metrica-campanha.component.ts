import { Component, OnInit } from '@angular/core';
import { EtapaCliente, CampanhaAds, CampanhaAdsApi, EtapaClienteApi } from '../shared/sdk';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metrica-campanha',
  templateUrl: './metrica-campanha.component.html',
  styleUrls: ['./metrica-campanha.component.scss']
})
export class MetricaCampanhaComponent implements OnInit {

  listaCampanha: CampanhaAds[];
  listaEtapaFunil: EtapaCliente[];

  idProjeto: number;

  constructor(private srv : CampanhaAdsApi, private srvEtapa: EtapaClienteApi, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let idProjeto = params['id'];
      this.carregaCampanha();
      this.carregaEtapa();
    });
  }

  carregaEtapa() {
    this.srvEtapa.find()
      .subscribe((result:EtapaCliente[]) => {
        this.listaEtapaFunil = result;
      })
  }

  carregaCampanha() {
    let filtro = {
      "where": {
        "projetoMySqlId": this.idProjeto
      },
      "order" : "dataInicial desc",
      "include": {
        "relation": "valorEtapaFunilCampanhas",
        "scope" : { "include": "etapaCliente" },
      }
    };
    this.srv.find(filtro)
      .subscribe((resultado:CampanhaAds[]) => {
        this.listaCampanha = resultado;
      })
  }

}
