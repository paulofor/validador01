import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-escolhedor-item-vallidacao',
  templateUrl: './escolhedor-item-vallidacao.component.html',
  styleUrls: ['./escolhedor-item-vallidacao.component.scss']
})
export class EscolhedorItemVallidacaoComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EscolhedorItemVallidacaoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log('EscolhedorItemVallidacaoComponent');
  }

  ngOnInit() {
  }

}
