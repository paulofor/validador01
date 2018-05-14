import { Component, OnInit } from '@angular/core';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';
import { ProjetoCanvas } from '../shared/sdk/models';

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjetoCanvasCriaComponent } from '../projeto-canvas-cria/projeto-canvas-cria.component'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BASE_URL, API_VERSION } from '../constantes/base.url';
import { LoopBackConfig } from '../shared/sdk/';

@Component({
  selector: 'app-canvas-projeto-2',
  templateUrl: './canvas-projeto-2.component.html',
  styleUrls: ['./canvas-projeto-2.component.scss']
})
export class CanvasProjeto2Component implements OnInit {

  projeto: Projeto;
  errMess: string;

  listaParceiro: ProjetoCanvas[];


  constructor(private dialog: MatDialog, private projetoService: ProjetoApi,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.route.params.subscribe((params: Params) => {
      let userId = params['id'];
      console.log('Id: ' , userId);
      this.projetoService.findById(userId)
        .subscribe((valor : Projeto) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.projeto = valor;
        })
    });

  }

  carregaParceiro() {
    this.projetoService.findByIdProjetoCanvasRel
  }

  openDialog() {
    this.dialog.open(ProjetoCanvasCriaComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}
