import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, IdeiaMelhoria, IdeiaMelhoriaApi, VersaoAppApi, VersaoApp } from '../shared/sdk';
import { IdeiaMelhoriaEditaComponent } from '../ideia-melhoria-edita/ideia-melhoria-edita.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ideia-melhoria-campanha-origem',
  templateUrl: './ideia-melhoria-campanha-origem.component.html',
  styleUrls: ['./ideia-melhoria-campanha-origem.component.scss']
})
export class IdeiaMelhoriaCampanhaOrigemComponent implements OnInit {

  @Input() campanha: CampanhaAds;
  versaoApp: VersaoApp;

  ideiaCampanha : IdeiaMelhoria[];

  constructor(private srv: IdeiaMelhoriaApi, private dialog:MatDialog, private srvVersaoApp : VersaoAppApi) { }

  ngOnInit() {
    if (this.campanha) {
      this.carregaIdeia();
    }
    if (this.campanha.versaoAppId && this.campanha.versaoAppId!=0) {
      this.carregaVersaoApp();
    }
  }

  carregaIdeia() {
    this.srv.find({'where' : {'campanhaAdsOrigemId' : this.campanha.id }})
      .subscribe((result:IdeiaMelhoria[]) => {
        this.ideiaCampanha = result;
      })
  }

  carregaVersaoApp() {
    this.srvVersaoApp.findById(this.campanha.versaoAppId)
      .subscribe((result:VersaoApp) => {
        this.versaoApp = result;
      })
  }

  openDialog(item?) {
    if (!item) {
      item = new IdeiaMelhoria();
      item.campanhaAdsOrigemId = this.campanha.id;
      item.projetoMySqlId = this.versaoApp.projetoMySqlId;
      item.conceitoProdutoId = this.versaoApp.conceitoProdutoId;
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaIdeia();
    });
    this.dialog.open(IdeiaMelhoriaEditaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
}
