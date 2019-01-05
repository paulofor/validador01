import { Component, OnInit } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi, ProjetoMySql } from '../shared/sdk';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-campanha-para-fechamento',
  templateUrl: './detalhe-campanha-para-fechamento.component.html',
  styleUrls: ['./detalhe-campanha-para-fechamento.component.scss']
})

export class DetalheCampanhaParaFechamentoComponent implements OnInit {


  campanha : CampanhaAds;

  filtro = {"include" : {"relation" : "paginaValidacaoWeb" , "scope" : {"include" : "projeto" }  } };

  constructor(private router: ActivatedRoute, private srv : CampanhaAdsApi) { }

  ngOnInit() {
    this.carregaCampanha();
  }

  carregaCampanha() {
    this.router.params.subscribe((params:Params) => {
        let idCampanha = params['id'];
        this.srv.findById(idCampanha, this. filtro)
          .subscribe((resultado:CampanhaAds) => {
            this.campanha = resultado;
          })
    })
  }

  /*
  carregaProjeto() {
    this.router.params.subscribe((params:Params) => {
      let idCampanha = params['id'];
      this.srv.findById(idCampanha, { 'include' : ''})
        .subscribe((resultado:CampanhaAds) => {
          this.campanha = resultado;
        })
  })
  }
  */

}
