import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-palavra-chave-add-projeto',
  templateUrl: './palavra-chave-add-projeto.component.html',
  styleUrls: ['./palavra-chave-add-projeto.component.scss']
})
export class PalavraChaveAddProjetoComponent implements OnInit {


  palavra : string;


  constructor(public dialogRef: MatDialogRef<PalavraChaveAddProjetoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srv : PalavraChaveAdsApi) {
  } 

  ngOnInit() {
    console.log("Parametro entrada" , this.data);
    this.palavra = new PalavraChaveAds();
    this.itemCanvas = this.data.itemValor;
  }


  onSubmit() {
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
