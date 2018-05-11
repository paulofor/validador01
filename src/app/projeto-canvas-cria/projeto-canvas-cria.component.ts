import { Component, OnInit } from '@angular/core';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-projeto-canvas-cria',
  templateUrl: './projeto-canvas-cria.component.html',
  styleUrls: ['./projeto-canvas-cria.component.scss']
})
export class ProjetoCanvasCriaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjetoCanvasCriaComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
