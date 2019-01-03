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
