import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProcessoNegocioApi } from '../shared/sdk';

@Component({
  selector: 'app-explica-processo',
  templateUrl: './explica-processo.component.html',
  styleUrls: ['./explica-processo.component.scss']
})
export class ExplicaProcessoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExplicaProcessoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ProcessoNegocioApi) {
  }

  ngOnInit() {
  }

}
