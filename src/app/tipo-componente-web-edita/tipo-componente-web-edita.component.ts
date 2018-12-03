import { Component, OnInit } from '@angular/core';
import { TipoComponenteWeb, TipoComponenteWebApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-tipo-componente-web-edita',
  templateUrl: './tipo-componente-web-edita.component.html',
  styleUrls: ['./tipo-componente-web-edita.component.scss']
})
export class TipoComponenteWebEditaComponent implements OnInit {

  item: TipoComponenteWeb;


  constructor(public dialogRef: MatDialogRef<TipoComponenteWebEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: TipoComponenteWebApi) {

  }


  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new TipoComponenteWeb();
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
