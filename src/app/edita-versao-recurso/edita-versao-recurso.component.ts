import { Component, OnInit, Inject } from '@angular/core';
import { VersaoRecurso, VersaoRecursoApi, RecursoProduto } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edita-versao-recurso',
  templateUrl: './edita-versao-recurso.component.html',
  styleUrls: ['./edita-versao-recurso.component.scss']
})
export class EditaVersaoRecursoComponent implements OnInit {

  item: VersaoRecurso;
  recurso : RecursoProduto;

  constructor(public dialogRef: MatDialogRef<EditaVersaoRecursoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: VersaoRecursoApi) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.recurso = this.data.recurso;
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new VersaoRecurso();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    //this.item.tempoPlanejado = this.getDateFromStr(this.item.tempoPlanejadoStr);
    this.item.tempoPlanejado = this.item.tempoPlanejadoStr;
    if (!this.item.id) {
      this.item.recursoProdutoId = this.recurso.id;
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

  getDateFromStr(tempoStr) : Date{
    console.log('tempoStr' + tempoStr);
    var tempo = tempoStr.split(":");
    var saida = new Date(0);
    saida.setUTCHours(Number(tempo[0]));
    saida.setUTCMinutes(Number(tempo[1]));
    console.log('saida' , saida);
    return saida;
  }

}
