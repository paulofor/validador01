import { Component, OnInit } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista-campanha-por-pagina',
  templateUrl: './lista-campanha-por-pagina.component.html',
  styleUrls: ['./lista-campanha-por-pagina.component.scss']
})
export class ListaCampanhaPorPaginaComponent implements OnInit {

  campanhas: CampanhaAds[];
  errMess: string;

  constructor(private srv: CampanhaAdsApi, private route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('IdPagina: ', id);
      this.srv.find({"where": {"": id}})
        .subscribe((valor: CampanhaAds[]) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.campanhas = valor;
        })
    });
  }


}
