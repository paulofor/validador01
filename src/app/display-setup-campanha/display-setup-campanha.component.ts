import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, SetupCampanha, SetupCampanhaApi } from '../shared/sdk';

@Component({
  selector: 'app-display-setup-campanha',
  templateUrl: './display-setup-campanha.component.html',
  styleUrls: ['./display-setup-campanha.component.scss']
})
export class DisplaySetupCampanhaComponent implements OnInit {

  @Input() campanha: CampanhaAds;

  setupCampanha: SetupCampanha;

  constructor(private srv: SetupCampanhaApi) { }

  ngOnInit() {
    if (this.campanha.presencaLojaId!=0)
      this.carregaItem();
  }

  carregaItem() {
    this.srv.findById(this.campanha.setupCampanhaId)
      .subscribe((result: SetupCampanha) => {
        this.setupCampanha = result;
      })
  }

}
