import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjetoMySql, ProjetoMySqlApi, EtapaProjeto, EtapaProjetoApi } from '../shared/sdk';

@Component({
  selector: 'app-edita-cad-projeto',
  templateUrl: './edita-cad-projeto.component.html',
  styleUrls: ['./edita-cad-projeto.component.scss']
})
export class EditaCadProjetoComponent implements OnInit {

  item: ProjetoMySql;
  listaEtapa : EtapaProjeto[];

  constructor(public dialogRef: MatDialogRef<EditaCadProjetoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ProjetoMySqlApi,
      private srvEtapa: EtapaProjetoApi) {
  }


  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.carregaEtapaProjeto();
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new ProjetoMySql();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      this.item.etapaProjeto = null;
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

  carregaEtapaProjeto() {
    this.srvEtapa.find({'order' : 'ordenacao'})
      .subscribe((result:EtapaProjeto[])=> {
        this.listaEtapa = result;
      })
  }

}
