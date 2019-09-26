import { Component, OnInit } from '@angular/core';
import { ItemValorApp, VersaoApp, ItemValorAppApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-associa-item-valor-versao-app',
  templateUrl: './associa-item-valor-versao-app.component.html',
  styleUrls: ['./associa-item-valor-versao-app.component.scss']
})
export class AssociaItemValorVersaoAppComponent implements OnInit {



  item: VersaoApp;
  listaItemValor: ItemValorApp[];

  

  constructor(public dialogRef: MatDialogRef<AssociaItemValorVersaoAppComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srvEtapa: ItemValorAppApi, 
      ) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
    this.carregaItemValor();
  }

  carregaItemValor() {
    let filtro = {"projetoMySqlId" : "32" , "include" : {"relation" : "valorVersaos" , "scope" : { "where" : {"versaoAppId" : "5"}} } }
    this.srvEtapa.find(filtro)
      .subscribe((result: ItemValorApp[]) => {
        this.listaItemValor = result;
        console.log('lista', this.listaItemValor);
      })
  }


  /*
  onSubmit() {
    console.log(this.listaEtapa);
    this.srvProcessoEtapa.AtualizaPorProcesso(this.item.id, this.listaEtapa)
      .subscribe((result) => {
        this.dialogRef.close('Pizza!');
      })
  }
  */


  getCheck(item:ItemValorApp) : boolean {
    return (item.valorVersaos!=null);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onChange(event, index, item : ItemValorApp) {
    /*
    if (item.valorVersaos==null) {
      item.valorVersaos = new ItemValorApp();
      item.valorVersaos.processoNegocioId = this.item.id;
      item.valorVersaos.etapaProjetoId = etapa.id;
    } else {
      item.valorVersaos = null;
    }
    */
  }

}
