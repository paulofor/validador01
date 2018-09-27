import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PalavraChaveAds, GanhoDorCanvasMySql, PalavraChaveAdsApi } from '../shared/sdk';


@Component({
  selector: 'app-palavra-chave-cria',
  templateUrl: './palavra-chave-cria.component.html',
  styleUrls: ['./palavra-chave-cria.component.scss']
})
export class PalavraChaveCriaComponent implements OnInit {


  palavra : PalavraChaveAds;
  itemCanvas : GanhoDorCanvasMySql;

  constructor(public dialogRef: MatDialogRef<PalavraChaveCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srv : PalavraChaveAdsApi) {
  } 

  ngOnInit() {
    console.log("Parametro entrada" , this.data);
    this.palavra = new PalavraChaveAds();
    this.itemCanvas = this.data.itemValor;
  }


  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.itemCanvas));
    this.palavra.ganhoDorCanvasMySqlId = this.itemCanvas.id;
    this.srv.create(this.palavra, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
