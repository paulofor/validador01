import { Component, OnInit } from '@angular/core';
import { ProcessoNegocio, ProcessoNegocioApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-processo-negocio-edita',
  templateUrl: './processo-negocio-edita.component.html',
  styleUrls: ['./processo-negocio-edita.component.scss']
})
export class ProcessoNegocioEditaComponent implements OnInit {


  item: ProcessoNegocio;


  constructor(public dialogRef: MatDialogRef<ProcessoNegocioEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ProcessoNegocioApi) {

  }

  
  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new ProcessoNegocio();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:' , JSON.stringify(this.item));
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
