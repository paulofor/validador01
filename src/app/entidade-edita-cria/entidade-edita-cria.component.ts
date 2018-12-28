import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EntidadeApi, Entidade, Aplicacao, Atributo_entidade, Atributo_entidadeApi } from '../shared/sdk';

@Component({
  selector: 'app-entidade-edita-cria',
  templateUrl: './entidade-edita-cria.component.html',
  styleUrls: ['./entidade-edita-cria.component.scss']
})
export class EntidadeEditaCriaComponent implements OnInit {

  item: Entidade;
  aplicacao: Aplicacao;
  listaAtributo: Atributo_entidade[];

  constructor(public dialogRef: MatDialogRef<EntidadeEditaCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private entidadaSrv: EntidadeApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.entidade) {
      console.log("fluxo nova entidade");
      this.item = new Entidade();
      this.listaAtributo = [];
      this.aplicacao = this.data.aplicacao;
      this.carregaAtributoEntidade();
    } else {
      console.log('fluxo altera entidade');
      this.item = this.data.entidade;
      this.carregaAtributoEntidade();
      console.log('Item:' , JSON.stringify(this.item));
    }


  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id_entidade) {
      this.item.id_aplicacao = this.aplicacao.id_aplicacao;
      this.item.projetoMySqlId = this.aplicacao.projetoMySqlId;
      this.entidadaSrv.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.item.atributoChave = null;
      this.item.atributoIdentificador = null;
      this.entidadaSrv.updateAttributes(this.item.id_entidade, this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    }
  }



  carregaAtributoEntidade() {
    this.entidadaSrv.getAtributoEntidades(this.item.id_entidade)
      .subscribe((valor: Atributo_entidade[]) => {
        this.listaAtributo = valor;
        console.log('Lista Atributo' , JSON.stringify(this.listaAtributo));
        console.log('Entidade:' , JSON.stringify(this.item));
      })
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
