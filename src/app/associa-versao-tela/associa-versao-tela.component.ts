import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TelaApp, TelaAppApi, VersaoApp, VersaoTelaApp, VersaoTelaAppApi } from '../shared/sdk';

@Component({
  selector: 'app-associa-versao-tela',
  templateUrl: './associa-versao-tela.component.html',
  styleUrls: ['./associa-versao-tela.component.scss']
})
export class AssociaVersaoTelaComponent implements OnInit {

  listaTela: TelaApp[];
  item : VersaoApp;
  versaoTela: VersaoTelaApp;

  constructor(public dialogRef: MatDialogRef<AssociaVersaoTelaComponent>, 
      @Inject(MAT_DIALOG_DATA) public data: any, private srvTela: TelaAppApi, private srvVersaoTela: VersaoTelaAppApi) { }

  ngOnInit() {
    if (this.data.item) {
      this.item = this.data.item;
      this.versaoTela = new VersaoTelaApp();
      this.versaoTela.versaoAppId = this.item.id;
      this.srvTela.DisponivelParaVersaoApp(this.data.item.id)
        .subscribe((result:TelaApp[]) => {
          this.listaTela = result;
        })
    }
  }

  onSubmit() {
    this.srvVersaoTela.create(this.versaoTela)
      .subscribe((result:any) => {
        console.log('Resultado: ' , result);
        this.dialogRef.close();
      })
  }

}
