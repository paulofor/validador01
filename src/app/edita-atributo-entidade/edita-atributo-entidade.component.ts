import { Component, OnInit } from '@angular/core';
import { Atributo_entidade, Entidade, Atributo_entidadeApi } from '../shared/sdk';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edita-atributo-entidade',
  templateUrl: './edita-atributo-entidade.component.html',
  styleUrls: ['./edita-atributo-entidade.component.scss']
})
export class EditaAtributoEntidadeComponent implements OnInit {

  entidade: Entidade;
  atributo: Atributo_entidade;

  constructor(public dialogRef: MatDialogRef<EditaAtributoEntidadeComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private entidadaSrv: Atributo_entidadeApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.atributo) {
      this.atributo = new Atributo_entidade();
    } else {
      this.atributo = this.data.atributo;
    }
    this.entidade = this.data.entidade;
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.atributo));
    if (this.atributo.id_atributo_entidade == 0) {
      this.atributo.id_entidade = this.entidade.id_entidade;
      this.entidadaSrv.create(this.atributo, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.entidadaSrv.updateAttributes(this.atributo.id_atributo_entidade, this.atributo, (err, obj) => {
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
