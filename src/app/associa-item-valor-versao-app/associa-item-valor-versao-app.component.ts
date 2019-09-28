import { Component, OnInit } from '@angular/core';
import { ItemValorApp, VersaoApp, ItemValorAppApi, ValorVersao, ValorVersaoApi } from '../shared/sdk';
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
    , @Inject(MAT_DIALOG_DATA) public data: any, private srvEtapa: ItemValorAppApi, private relSrv: ValorVersaoApi
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
    let filtro = {"projetoMySqlId" : this.item.projetoMySqlId , "include" : {"relation" : "valorVersaos" , "scope" : { "where" : {"versaoAppId" : this.item.id}} } }
    this.srvEtapa.find(filtro)
      .subscribe((result: ItemValorApp[]) => {
        this.listaItemValor = result;
        console.log('lista', this.listaItemValor);
      })
  }



  onSubmit() {
    console.log('AtualizaPorVersaoApp(1):' , this.item.id);
    console.log('AtualizaPorVersaoApp(2):' , JSON.stringify(this.listaItemValor));
    this.relSrv.AtualizaPorVersaoApp(this.item.id, this.listaItemValor)
      .subscribe((result) => {
        this.dialogRef.close('Pizza!');
      })
  }
 

  getCheck(item:ItemValorApp) : boolean {
    return (item.valorVersaos.length>0);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onChange(event, index, item : ItemValorApp) {
    if (item.valorVersaos.length==0) {
      let rel: ValorVersao = new ValorVersao();
      rel.itemValorAppId = item.id;
      rel.versaoAppId = this.item.id;
      item.valorVersaos.push(rel);
    } else {
      item.valorVersaos = [];
    }
    
  }

}
