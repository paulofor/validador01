import { Component, OnInit, Inject } from '@angular/core';
import { AnuncioAplicativo, AnuncioAplicativoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edita-anuncio-app',
  templateUrl: './edita-anuncio-app.component.html',
  styleUrls: ['./edita-anuncio-app.component.scss']
})
export class EditaAnuncioAppComponent implements OnInit {

  item: AnuncioAplicativo;

  constructor(public dialogRef: MatDialogRef<EditaAnuncioAppComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: AnuncioAplicativoApi) {
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
