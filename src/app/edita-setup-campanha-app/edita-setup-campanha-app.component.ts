import { Component, OnInit, Inject } from '@angular/core';
import { SetupCampanha, SetupCampanhaApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edita-setup-campanha-app',
  templateUrl: './edita-setup-campanha-app.component.html',
  styleUrls: ['./edita-setup-campanha-app.component.scss']
})
export class EditaSetupCampanhaAppComponent implements OnInit {

  item: SetupCampanha;

  constructor(public dialogRef: MatDialogRef<EditaSetupCampanhaAppComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: SetupCampanhaApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new SetupCampanha();
      this.item.permiteEdicao = 1;
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    this.item.custoTotal = this.getCustoTotal();
    //this.item.cliqueTotal = this.getTotalClique();
    this.item.tipoCampanha = 'INSTALACAO';
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

  getTotalInstalacao() {
    var saida = 0;
    let tamanho = this.getTamanho();
    if (this.item.budgetDiario>0 && this.item.custoInstalacao > 0 && tamanho> 0) {
      saida = tamanho * (this.item.budgetDiario / this.item.custoInstalacao);
    }
    return saida;
  }

  getCustoTotal() {
    var saida = 0;
    let tamanho = this.getTamanho();
    if (this.item.budgetDiario>0 && tamanho > 0) {
      saida = tamanho * this.item.budgetDiario;
    }
    return saida;
  }

  getTamanho() {
    if (this.item.diaSemanaInicio && this.item.diaSemanaFinal) {
      let qtde = this.getDia(this.item.diaSemanaFinal) - this.getDia(this.item.diaSemanaInicio) + 1;
      if (qtde==0) qtde = 7;
      return qtde;
    } else
      return 0;
  }

  getDia(dia : string) {
    if (dia == 'SUNDAY') return 1;
    if (dia == 'MONDAY') return 2;
    if (dia == 'FRIDAY') return 6;
    if (dia == 'SATURDAY') return 7;
  }

}
