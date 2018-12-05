import { Component, OnInit, Inject } from '@angular/core';
import { RespostaMercado, RespostaMercadoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-resposta-mercado-edita',
  templateUrl: './resposta-mercado-edita.component.html',
  styleUrls: ['./resposta-mercado-edita.component.scss']
})
export class RespostaMercadoEditaComponent implements OnInit {



  item: RespostaMercado;


  constructor(public dialogRef: MatDialogRef<RespostaMercadoEditaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: RespostaMercadoApi) {

  }


  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new RespostaMercado();
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
