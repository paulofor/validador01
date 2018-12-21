import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AnuncioAds, ValorConceito, AnuncioAdsApi } from '../shared/sdk';

@Component({
  selector: 'app-anuncio-ads-edita-valor-conceito',
  templateUrl: './anuncio-ads-edita-valor-conceito.component.html',
  styleUrls: ['./anuncio-ads-edita-valor-conceito.component.scss']
})
export class AnuncioAdsEditaValorConceitoComponent implements OnInit {

  item : AnuncioAds;
  valor: ValorConceito;

  constructor(public dialogRef: MatDialogRef<AnuncioAdsEditaValorConceitoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: AnuncioAdsApi) {}

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.valor = this.data.valor;
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new AnuncioAds();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.item.valorConceitoId = this.valor.id;
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
