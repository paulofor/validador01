import { Component, OnInit } from '@angular/core';
import { EtapaCliente, CampanhaAds, CampanhaAdsApi, EtapaClienteApi, ProjetoMySqlApi, ValorEtapaFunilCampanhaApi, ProjetoMySql } from '../shared/sdk';
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
  projeto: ProjetoMySql;

  constructor(private srv : CampanhaAdsApi, private srvEtapa: EtapaClienteApi, private route: ActivatedRoute,
                private srvProjeto: ProjetoMySqlApi, private metricaCampanhaSrv: ValorEtapaFunilCampanhaApi) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idProjeto = params['id'];
      this.carregaCampanha();
      this.carregaEtapa();
      this.carregaProjeto();
    });
  }

  carregaProjeto() {
    //console.log('IdProjeto: ', this.idProjeto);
    this.srvProjeto.findById(this.idProjeto)
      .subscribe((result:ProjetoMySql) => {
        this.projeto = result;
      })
  }

  carregaEtapa() {
    let filtro = {'order' : 'posicao' , 'where' : { 'funilNegocioId' : '1' }  };
    this.srvEtapa.find(filtro)
      .subscribe((result:EtapaCliente[]) => {
        this.listaEtapaFunil = result;
      })
  }

  carregaCampanha() {
    var filtro = {
      "where": {
        "projetoMySqlId": this.idProjeto
      },
      "order" : "dataInicial desc",
      "include": {
        "relation": "valorEtapaFunilCampanhas",
        "scope" : { "order" : "posicaoEtapa", "include": "etapaCliente" },
      }
    };
    console.log('MetricaCampanhaComponent-filtro: ' , JSON.stringify(filtro));
    this.srv.find(filtro)
      .subscribe((resultado:CampanhaAds[]) => {
        console.log('Resultado:' , resultado);
        this.listaCampanha = resultado;
      })
  }


  atualizaMetrica() {
    this.metricaCampanhaSrv.AtualizaValorCampanha()
      .subscribe((result) => {
        this.carregaCampanha();
      })
  }

}
