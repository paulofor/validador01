import { Component, OnInit, Input } from '@angular/core';
import { IdeiaMelhoria, IdeiaMelhoriaApi, VersaoAppApi, CampanhaAds } from '../shared/sdk';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-display-ideia-melhoria-origem',
  templateUrl: './display-ideia-melhoria-origem.component.html',
  styleUrls: ['./display-ideia-melhoria-origem.component.scss']
})
export class DisplayIdeiaMelhoriaOrigemComponent implements OnInit {

  @Input() campanha: CampanhaAds;
  //versaoApp: VersaoApp;

  ideiaOrigem : IdeiaMelhoria;

  constructor(private srv: IdeiaMelhoriaApi, private dialog:MatDialog, private srvVersaoApp : VersaoAppApi) { }

  ngOnInit() {
    if (this.campanha) {
      console.log('IdeiaMelhoriaCampanhaOrigemComponent-Existe campanha (id:' + this.campanha.id + ')');
      this.carregaIdeia();
    } 
    //if (this.campanha.versaoAppId && this.campanha.versaoAppId!=0) {
    //console.log('IdeiaMelhoriaCampanhaOrigemComponent-Existe versaoApp');
    //  this.carregaVersaoApp();
    //}
  }

  carregaIdeia() {
    let filtro = {"where" : {"campanhaAdsOrigemId" : this.campanha.id }};
    console.log('filtro:' , filtro);
    this.srv.findById(this.campanha.ideiaMelhoriaId)
      .subscribe((result:IdeiaMelhoria) => {
        console.log('IdeiaMelhoriaCampanhaOrigemComponent-ideiaOrigem', result);
        this.ideiaOrigem = result;
      })
  }

  /*
  carregaVersaoApp() {
    this.srvVersaoApp.findById(this.campanha.versaoAppId)
      .subscribe((result:VersaoApp) => {
        console.log('IdeiaMelhoriaCampanhaOrigemComponent-Resultado', result);
        this.versaoApp = result;
      })
  }
  */

}
