import { Component, OnInit, Inject } from '@angular/core';
import { TelaWeb, Aplicacao, TelaWebApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tela-web-edita-cria',
  templateUrl: './tela-web-edita-cria.component.html',
  styleUrls: ['./tela-web-edita-cria.component.scss']
})
export class TelaWebEditaCriaComponent implements OnInit {

  item: TelaWeb;
  aplicacao: Aplicacao;
  //listaAtributo: Atributo_entidade[];

  constructor(public dialogRef: MatDialogRef<TelaWebEditaCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private telaWebSrv: TelaWebApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.telaWeb) {
      console.log("fluxo nova telaWeb");
      this.item = new TelaWeb();
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

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.item.aplicacaoId = this.aplicacao.id_aplicacao;
      this.telaWebSrv.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.telaWebSrv.updateAttributes(this.item.id, this.item, (err, obj) => {
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
