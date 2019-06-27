import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SetupCampanha, SetupCampanhaApi } from '../shared/sdk';

@Component({
  selector: 'app-edita-setup-campanha',
  templateUrl: './edita-setup-campanha.component.html',
  styleUrls: ['./edita-setup-campanha.component.scss']
})
export class EditaSetupCampanhaComponent implements OnInit {

  item: SetupCampanha;

  constructor(public dialogRef: MatDialogRef<EditaSetupCampanhaComponent>
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
    this.item.cliqueTotal = this.getTotalClique();
    this.item.tipoCampanha = 'GERAL';
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

  getTotalClique() {
    var saida = 0;
    let tamanho = this.getTamanho();
    if (this.item.budgetDiario>0 && this.item.maxCpcGrupoAnuncio > 0 && tamanho> 0) {
      saida = tamanho * (this.item.budgetDiario / this.item.maxCpcGrupoAnuncio);
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
    if (this.item.diaSemanaInicio && this.item.diaSemanaFinal)
      return this.getDia(this.item.diaSemanaFinal) - this.getDia(this.item.diaSemanaInicio) + 1;
    else
      return 0;
  }

  getDia(dia : string) {
    if (dia == 'SUNDAY') return 1;
    if (dia == 'MONDAY') return 2;
    if (dia == 'FRIDAY') return 6;
    if (dia == 'SATURDAY') return 7;
  }


}
