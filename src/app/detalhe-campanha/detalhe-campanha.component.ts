import { Component, OnInit } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi } from '../shared/sdk';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-campanha',
  templateUrl: './detalhe-campanha.component.html',
  styleUrls: ['./detalhe-campanha.component.scss']
})
export class DetalheCampanhaComponent implements OnInit {

  campanha: CampanhaAds;

  constructor(private srv : CampanhaAdsApi, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carregaCampanha();
  }

  carregaCampanha() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.findById(id)
        .subscribe((result:CampanhaAds) => {
          this.campanha = result;
        })
    })
    
  }

}
