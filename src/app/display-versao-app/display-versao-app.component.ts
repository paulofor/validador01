import { Component, OnInit, Input } from '@angular/core';
import { VersaoAppApi, CampanhaAds, VersaoApp } from '../shared/sdk';

@Component({
  selector: 'app-display-versao-app',
  templateUrl: './display-versao-app.component.html',
  styleUrls: ['./display-versao-app.component.scss']
})
export class DisplayVersaoAppComponent implements OnInit {

  @Input() campanha: CampanhaAds;

  versaoApp: VersaoApp;
  filtro = {"include" : { "relation" : "valorVersaos" , "scope" : {"include" : "itemValorApp" } } };

  constructor(private srv: VersaoAppApi) { }

  ngOnInit() {
    console.log('DisplayVersaoAppComponent:' , this.campanha);
    if (this.campanha.versaoAppId!=0)
      this.carregaItem();
  }

  carregaItem() {
    this.srv.findById(this.campanha.versaoAppId, this.filtro)
      .subscribe((result: VersaoApp) => {
        this.versaoApp = result;
      })
  }
}
