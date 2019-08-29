import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, IdeiaMelhoria, IdeiaMelhoriaApi } from '../shared/sdk';
import { IdeiaMelhoriaEditaComponent } from '../ideia-melhoria-edita/ideia-melhoria-edita.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ideia-melhoria-campanha-origem',
  templateUrl: './ideia-melhoria-campanha-origem.component.html',
  styleUrls: ['./ideia-melhoria-campanha-origem.component.scss']
})
export class IdeiaMelhoriaCampanhaOrigemComponent implements OnInit {

  @Input() campanha: CampanhaAds;

  ideiaCampanha : IdeiaMelhoria[];

  constructor(private srv: IdeiaMelhoriaApi, private dialog:MatDialog) { }

  ngOnInit() {
    if (this.campanha) {
      this.carregaIdeia();
    }
  }

  carregaIdeia() {
    this.srv.find({'where' : {'campanhaAdsOrigemId' : this.campanha.id }})
      .subscribe((result:IdeiaMelhoria[]) => {
        this.ideiaCampanha = result;
      })
  }

  openDialog(item?) {
    if (!item) {
      item = new IdeiaMelhoria();
      item.campanhaAdsOrigemId = this.campanha.id;
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
