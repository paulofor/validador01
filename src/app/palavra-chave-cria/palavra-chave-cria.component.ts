import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-palavra-chave-cria',
  templateUrl: './palavra-chave-cria.component.html',
  styleUrls: ['./palavra-chave-cria.component.scss']
})
export class PalavraChaveCriaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PalavraChaveCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) {
  } 

  ngOnInit() {
  }

}
