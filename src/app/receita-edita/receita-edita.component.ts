import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjetoMySql } from '../shared/sdk';

@Component({
  selector: 'app-receita-edita',
  templateUrl: './receita-edita.component.html',
  styleUrls: ['./receita-edita.component.scss']
})
export class ReceitaEditaComponent implements OnInit {

  receita : ProjetoMySql;

  constructor(public dialogRef: MatDialogRef<ReceitaEditaComponent>
              , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('Data: ', JSON.stringify(this.data));
    this.receita = this.data.receita;
  }

}
