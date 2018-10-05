import { Component, OnInit } from '@angular/core';
import { Relacionamento_entidade, Entidade, Relacionamento_entidadeApi, AplicacaoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edita-relacionamento-entidade',
  templateUrl: './edita-relacionamento-entidade.component.html',
  styleUrls: ['./edita-relacionamento-entidade.component.scss']
})
export class EditaRelacionamentoEntidadeComponent implements OnInit {

  entidade: Entidade;
  item: Relacionamento_entidade;
  listaParaRelacionar: Entidade[];

  constructor(public dialogRef: MatDialogRef<EditaRelacionamentoEntidadeComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private aplicacaoSrv :AplicacaoApi,
    private relacSrv: Relacionamento_entidadeApi) {
     
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      this.item = new Relacionamento_entidade();
    } else {
      this.item = this.data.item;
    }
    this.entidade = this.data.entidade;
    this.carregaListaParaRelacionar();
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id_relacionamento_entidade) {
      this.item.id_entidade1 = this.entidade.id_entidade;
      this.relacSrv.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.relacSrv.updateAttributes(this.item.id_relacionamento_entidade, this.item, (err, obj) => {
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

  carregaListaParaRelacionar() {
    this.aplicacaoSrv.getEntidades(this.entidade.id_aplicacao)
      .subscribe((result: Entidade[]) => {
        console.log("Lista para relacionar: " , JSON.stringify(result));
        this.listaParaRelacionar = result;
      }) 
  }
}
