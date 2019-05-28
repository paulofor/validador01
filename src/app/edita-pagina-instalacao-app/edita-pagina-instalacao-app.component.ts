import { Component, OnInit, Inject } from '@angular/core';
import { PaginaInstalacaoApp, PaginaInstalacaoAppApi } from '../shared/sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edita-pagina-instalacao-app',
  templateUrl: './edita-pagina-instalacao-app.component.html',
  styleUrls: ['./edita-pagina-instalacao-app.component.scss']
})
export class EditaPaginaInstalacaoAppComponent implements OnInit {


  item: PaginaInstalacaoApp;


  constructor(public dialogRef: MatDialogRef<EditaPaginaInstalacaoAppComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: PaginaInstalacaoAppApi) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new PaginaInstalacaoApp();
      this.item.permiteEdicao = 1;
      console.log('Item: ' , JSON.stringify(this.item));
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      //this.item.projetoMySqlId = this.conceito.projetoMySqlId;
      this.servico.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.servico.updateAttributes(this.item.id, this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
