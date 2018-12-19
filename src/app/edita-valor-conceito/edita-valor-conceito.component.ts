import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { ValorConceito, ValorConceitoApi, ConceitoProduto } from '../shared/sdk';


@Component({
  selector: 'app-edita-valor-conceito',
  templateUrl: './edita-valor-conceito.component.html',
  styleUrls: ['./edita-valor-conceito.component.scss']
})
export class EditaValorConceitoComponent implements OnInit {

  item : ValorConceito;
  conceito: ConceitoProduto;

  constructor(public dialogRef: MatDialogRef<EditaValorConceitoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ValorConceitoApi) { }

    ngOnInit() {
      console.log("Parametro entrada", this.data);
      this.conceito = this.data.conceito;
      if (!this.data.item) {
        console.log("fluxo nova");
        this.item = new ValorConceito();
      } else {
        console.log('fluxo altera');
        this.item = this.data.item;
        console.log('Item:', JSON.stringify(this.item));
      }
    }
  
    onSubmit() {
      console.log('Model: ' + JSON.stringify(this.item));
      if (!this.item.id) {
        this.item.conceitoProdutoId = this.conceito.id;
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
