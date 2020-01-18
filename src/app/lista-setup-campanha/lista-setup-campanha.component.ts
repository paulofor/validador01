import { Component, OnInit } from '@angular/core';
import { CampanhaAds, SetupCampanha, SetupCampanhaApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaSetupCampanhaComponent } from '../edita-setup-campanha/edita-setup-campanha.component';
import { EditaSetupCampanhaAppComponent } from '../edita-setup-campanha-app/edita-setup-campanha-app.component';

@Component({
  selector: 'app-lista-setup-campanha',
  templateUrl: './lista-setup-campanha.component.html',
  styleUrls: ['./lista-setup-campanha.component.scss']
})
export class ListaSetupCampanhaComponent implements OnInit {

  lista: SetupCampanha[];
  listaApp: SetupCampanha[];

  constructor(private srv: SetupCampanhaApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.find({ 'where': { 'tipoCampanha': 'GERAL' } })
      .subscribe((resultado: SetupCampanha[]) => {
        this.lista = resultado;
      });
    this.srv.find({ 'where': { 'tipoCampanha': 'INSTALACAO' } })
      .subscribe((resultado: SetupCampanha[]) => {
        this.listaApp = resultado;
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

  openDialogApp(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaLista();
    });
    this.dialog.open(EditaSetupCampanhaAppComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

  permiteEdicao(item) {
    return (item.permiteEdicao == 1);
  }

  atualiza() {
    this.srv.CalculaMetrica()
      .subscribe((result) => {
        this.carregaLista();
      })
  }

}
