import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Inject } from '@angular/core';
import { PalavraGoogleProjeto, PalavraGoogleProjetoApi }  from '../shared/sdk';


@Component({
  selector: 'app-palavra-chave-add-projeto',
  templateUrl: './palavra-chave-add-projeto.component.html',
  styleUrls: ['./palavra-chave-add-projeto.component.scss']
})
export class PalavraChaveAddProjetoComponent implements OnInit {


  palavra : PalavraGoogleProjeto;


  constructor(public dialogRef: MatDialogRef<PalavraChaveAddProjetoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srv : PalavraGoogleProjetoApi) {
  } 

  ngOnInit() {
    console.log("Parametro entrada" , this.data);
    if (this.data.item) {
      this.palavra.projetoMySqlId = this.data.item.id;
    }
  }


  onSubmit() {
    this.srv.CriaPalavra(this.palavra)
      .subscribe((result) => {
        this.closeDialog();
      });
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
