import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VersaoApp, EtapaCliente, ProjetoMySql, VersaoAppApi, EtapaClienteApi, ProjetoMySqlApi, ValorEtapaFunilVersaoAppApi } from '../shared/sdk';

@Component({
  selector: 'app-metrica-versao-app',
  templateUrl: './metrica-versao-app.component.html',
  styleUrls: ['./metrica-versao-app.component.scss']
})
export class MetricaVersaoAppComponent implements OnInit {

  
  listaVersao: VersaoApp[];
  listaEtapaFunil: EtapaCliente[];

  idProjeto: number;
  projeto: ProjetoMySql;

  constructor(private srv : VersaoAppApi, private srvEtapa: EtapaClienteApi, private route: ActivatedRoute,
                private srvProjeto: ProjetoMySqlApi, private metricaCampanhaSrv: ValorEtapaFunilVersaoAppApi) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idProjeto = params['id'];
      this.carregaVersao();
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

  carregaVersao() {
    var filtro = {
      "where": {
        "projetoMySqlId": this.idProjeto
      },
      "order" : "id desc",
      "include": {
        "relation": "valorEtapaFunilVersaoApps",
        "scope" : { "order" : "posicaoEtapa", "include": "etapaCliente" },
      },
      "counts" : "campanhaAds"
    };
    console.log('MetricaVersaoAppComponent-filtro: ' , JSON.stringify(filtro));
    this.srv.find(filtro)
      .subscribe((resultado:VersaoApp[]) => {
        console.log('Resultado:' , resultado);
        this.listaVersao = resultado;
      })
  }


  atualizaMetrica() {
    this.metricaCampanhaSrv.AtualizaValorVersaoApp()
      .subscribe((result) => {
        this.carregaVersao();
      })
  }


}
