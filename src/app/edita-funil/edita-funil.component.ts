import { Component, OnInit } from '@angular/core';
import { FunilNegocio, FunilNegocioApi } from '../shared/sdk';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edita-funil',
  templateUrl: './edita-funil.component.html',
  styleUrls: ['./edita-funil.component.scss']
})
export class EditaFunilComponent implements OnInit {

  item : FunilNegocio;

  constructor(public dialogRef: MatDialogRef<EditaFunilComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: FunilNegocioApi) {
  }

  ngOnInit() {
    if (!this.data.item) {
      this.item = new FunilNegocio();
    } else {
      this.item = this.data.item;
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
