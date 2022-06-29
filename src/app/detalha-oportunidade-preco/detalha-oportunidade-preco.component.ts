import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detalha-oportunidade-preco',
  templateUrl: './detalha-oportunidade-preco.component.html',
  styleUrls: ['./detalha-oportunidade-preco.component.scss']
})
export class DetalhaOportunidadePrecoComponent implements OnInit {

  listaPreco: any[];
  produto: any;

  constructor(protected dialogRef: MatDialogRef<DetalhaOportunidadePrecoComponent>
    , @Inject(MAT_DIALOG_DATA) protected data: any
  ) {
  }

  ngOnInit() {
    console.log('Data:', this.data);
    this.listaPreco = this.data.item.precoDiarios;
    this.produto = this.data.item;
  }

}
