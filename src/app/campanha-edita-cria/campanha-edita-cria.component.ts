import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-campanha-edita-cria',
  templateUrl: './campanha-edita-cria.component.html',
  styleUrls: ['./campanha-edita-cria.component.scss']
})
export class CampanhaEditaCriaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CampanhaEditaCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
