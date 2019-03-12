import { Component, OnInit, Inject } from '@angular/core';
import { TelaApp, Aplicacao, TelaAppApi, ModeloTelaApp, Entidade, EntidadeApi, ModeloTelaAppApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tela-app-edita-cria',
  templateUrl: './tela-app-edita-cria.component.html',
  styleUrls: ['./tela-app-edita-cria.component.scss']
})
export class TelaAppEditaCriaComponent implements OnInit {

  item: TelaApp;
  aplicacao: Aplicacao;
  listaModeloTela : ModeloTelaApp[];
  listaEntidade : Entidade[];
  //listaAtributo: Atributo_entidade[];

  constructor(public dialogRef: MatDialogRef<TelaAppEditaCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private telaAppSrv: TelaAppApi, private entidadeSrv: EntidadeApi, private modeloTelaSrv: ModeloTelaAppApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.carregaListaEntidade();
    if (!this.data.telaApp) {
      console.log("fluxo nova telaWeb");
      this.item = new TelaApp();
      //this.listaAtributo = [];
      this.aplicacao = this.data.aplicacao;
      //this.carregaAtributoEntidade();
    } else {
      console.log('fluxo altera telaWeb');
      this.item = this.data.telaWeb;
      //this.carregaAtributoEntidade();
      console.log('Item:' , JSON.stringify(this.item));
    }
  }

  carregaListaEntidade() {
    var filtro = { 'where' : {'id_aplicacao' : this.aplicacao.id_aplicacao }};
    this.entidadeSrv.find(filtro)
      .subscribe((result:Entidade[]) => {
        this.listaEntidade = result;
      })
  }



  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.item.aplicacaoId = this.aplicacao.id_aplicacao;
      this.telaAppSrv.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.telaAppSrv.updateAttributes(this.item.id, this.item, (err, obj) => {
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
