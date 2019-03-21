import { Component, OnInit } from '@angular/core';
import { PaletaCor, PaletaCorApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edita-paleta-cor',
  templateUrl: './edita-paleta-cor.component.html',
  styleUrls: ['./edita-paleta-cor.component.scss']
})
export class EditaPaletaCorComponent implements OnInit {


  item: PaletaCor;

  constructor(public dialogRef: MatDialogRef<EditaPaletaCorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: PaletaCorApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new PaletaCor();
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
