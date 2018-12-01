import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TipoExperiencia, TipoExperienciaApi } from '../shared/sdk';

@Component({
  selector: 'app-tipo-experiencia-edita',
  templateUrl: './tipo-experiencia-edita.component.html',
  styleUrls: ['./tipo-experiencia-edita.component.scss']
})
export class TipoExperienciaEditaComponent implements OnInit {

  item: TipoExperiencia;


  constructor(public dialogRef: MatDialogRef<TipoExperienciaEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: TipoExperienciaApi) {

  }

  
  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new TipoExperiencia();
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
