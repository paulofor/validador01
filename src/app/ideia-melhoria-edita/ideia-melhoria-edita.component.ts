import { Component, OnInit, Inject } from '@angular/core';
import { IdeiaMelhoria, IdeiaMelhoriaApi } from '../shared/sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ideia-melhoria-edita',
  templateUrl: './ideia-melhoria-edita.component.html',
  styleUrls: ['./ideia-melhoria-edita.component.scss']
})
export class IdeiaMelhoriaEditaComponent implements OnInit {

  item: IdeiaMelhoria;

  constructor(public dialogRef: MatDialogRef<IdeiaMelhoriaEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: IdeiaMelhoriaApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item.id) {
      console.log("fluxo nova");
      //this.item = new AnuncioAplicativo();
      this.item = this.data.item;
      //this.item.permiteEdicao = 1;
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }


  onSubmit() {
    console.log('(onSubmit)->Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.item.dataCriacao = new Date();
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
