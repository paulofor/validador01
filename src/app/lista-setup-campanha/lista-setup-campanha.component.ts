import { Component, OnInit } from '@angular/core';
import { CampanhaAds, SetupCampanha, SetupCampanhaApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaSetupCampanhaComponent } from '../edita-setup-campanha/edita-setup-campanha.component';

@Component({
  selector: 'app-lista-setup-campanha',
  templateUrl: './lista-setup-campanha.component.html',
  styleUrls: ['./lista-setup-campanha.component.scss']
})
export class ListaSetupCampanhaComponent implements OnInit {

  lista: SetupCampanha[];

  constructor(private srv: SetupCampanhaApi, private dialog:MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.find()
      .subscribe((resultado: SetupCampanha[]) => {
        this.lista = resultado;
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaLista();
    });
    this.dialog.open(EditaSetupCampanhaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

  permiteEdicao(item) {
    return (item.permiteEdicao==1);
  }

}
