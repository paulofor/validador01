import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VersaoTelaApp, VersaoTelaAppApi } from '../shared/sdk';

@Component({
  selector: 'app-versao-tela-app-edita',
  templateUrl: './versao-tela-app-edita.component.html',
  styleUrls: ['./versao-tela-app-edita.component.scss']
})
export class VersaoTelaAppEditaComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<VersaoTelaAppEditaComponent> 
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: VersaoTelaAppApi) { }

  ngOnInit() {
  }

}
