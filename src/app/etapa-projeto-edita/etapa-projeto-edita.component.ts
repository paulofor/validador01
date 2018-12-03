import { Component, OnInit } from '@angular/core';
import { EtapaProjeto } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { EtapaProjetoApi } from '../shared/sdk/services';

@Component({
  selector: 'app-etapa-projeto-edita',
  templateUrl: './etapa-projeto-edita.component.html',
  styleUrls: ['./etapa-projeto-edita.component.scss']
})
export class EtapaProjetoEditaComponent implements OnInit {


  item: EtapaProjeto;


  constructor(public dialogRef: MatDialogRef<EtapaProjetoEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: EtapaProjetoApi) {

  }


  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new EtapaProjeto();
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
