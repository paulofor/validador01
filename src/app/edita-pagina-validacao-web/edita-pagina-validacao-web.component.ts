import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { PaginaValidacaoWeb } from '../shared/sdk';

@Component({
  selector: 'app-edita-pagina-validacao-web',
  templateUrl: './edita-pagina-validacao-web.component.html',
  styleUrls: ['./edita-pagina-validacao-web.component.scss']
})
export class EditaPaginaValidacaoWebComponent implements OnInit {

  item: PaginaValidacaoWeb;

  constructor(public dialogRef: MatDialogRef<EditaPaginaValidacaoWebComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = new PaginaValidacaoWeb();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

}
