import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TelaApp, TelaAppApi, VersaoApp, VersaoTelaApp, VersaoTelaAppApi } from '../shared/sdk';

@Component({
  selector: 'app-escolhe-tela-app-para-versao',
  templateUrl: './escolhe-tela-app-para-versao.component.html',
  styleUrls: ['./escolhe-tela-app-para-versao.component.scss']
})
export class EscolheTelaAppParaVersaoComponent implements OnInit {

  telas : TelaApp[];
  versaoApp : VersaoApp;
  telaAppId : number;

  versaoTelaApp: VersaoTelaApp;

  constructor(public dialogRef: MatDialogRef<EscolheTelaAppParaVersaoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: VersaoTelaAppApi, 
      private srvTela:TelaAppApi) {

  }

  ngOnInit() {
    if (this.data.versao) {
      this.versaoApp = this.data.versao;
      this.versaoTelaApp = new VersaoTelaApp();
      this.versaoTelaApp.versaoAppId = this.data.versao.id;
      this.carregaTelas();
    }
  }

  carregaTelas() {
    this.srvTela.ListaTelaAppProjeto(this.versaoApp.projetoMySqlId,0)
      .subscribe((lista:TelaApp[]) => {
        this.telas = lista;
        console.log('Telas do projeto:' , this.telas);
      })
  }

  onSubmit() {
    console.log('Id - TelaId:' , this.versaoTelaApp);
    this.servico.CriaVersaoComMetrica(this.versaoTelaApp)
      .subscribe((resultado) => {
        this.dialogRef.close('Pizza!');
      })
  }

}
