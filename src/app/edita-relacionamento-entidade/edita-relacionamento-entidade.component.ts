import { Component, OnInit } from '@angular/core';
import { Relacionamento_entidade, Entidade, Relacionamento_entidadeApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edita-relacionamento-entidade',
  templateUrl: './edita-relacionamento-entidade.component.html',
  styleUrls: ['./edita-relacionamento-entidade.component.scss']
})
export class EditaRelacionamentoEntidadeComponent implements OnInit {

  entidade: Entidade;
  item: Relacionamento_entidade;

  constructor(public dialogRef: MatDialogRef<EditaRelacionamentoEntidadeComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private entidadaSrv: Relacionamento_entidadeApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.atributo) {
      this.item = new Relacionamento_entidade();
    } else {
      this.item = this.data.item;
    }
    this.entidade = this.data.entidade;
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (this.item.id_relacionamento_entidade == 0) {
      this.item.id_entidade1 = this.entidade.id_entidade;
      this.entidadaSrv.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.entidadaSrv.updateAttributes(this.item.id_relacionamento_entidade, this.item, (err, obj) => {
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
