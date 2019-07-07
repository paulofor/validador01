import { Component, OnInit, Inject } from '@angular/core';
import { VersaoApp, VersaoAppApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-versao-app-edita',
  templateUrl: './versao-app-edita.component.html',
  styleUrls: ['./versao-app-edita.component.scss']
})
export class VersaoAppEditaComponent implements OnInit {

  item: VersaoApp;

  constructor(public dialogRef: MatDialogRef<VersaoAppEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: VersaoAppApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item.id) {
      console.log("fluxo nova");
      //this.item = new AnuncioAplicativo();
      this.item = this.data.item;
      this.item.permiteEdicao = 1;
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
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
