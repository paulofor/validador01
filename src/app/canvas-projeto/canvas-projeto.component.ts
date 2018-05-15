import { Component, OnInit } from '@angular/core';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';

import { ProjetoCanvas } from '../shared/sdk/models';
import { ProjetoCanvasApi } from '../shared/sdk/services/custom/ProjetoCanvas';

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjetoCanvasCriaComponent } from '../projeto-canvas-cria/projeto-canvas-cria.component'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BASE_URL, API_VERSION } from '../constantes/base.url';
import { LoopBackConfig } from '../shared/sdk/';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-canvas-projeto',
  templateUrl: './canvas-projeto.component.html',
  styleUrls: ['./canvas-projeto.component.scss']
})
export class CanvasProjetoComponent implements OnInit {

  projeto: Projeto;
  errMess: string;

  parceiros: ProjetoCanvas[] = [];


  constructor(private dialog: MatDialog, private projetoService: ProjetoApi,
    private projetoCanvasService: ProjetoCanvasApi,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('CanvasProjetoComponent');
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.parceiros = [];
    this.carregaDados();

  }

  openDialog(tipoArea) {
    console.log('Tipo:' , tipoArea)
    this.dialog.open(ProjetoCanvasCriaComponent, {
      width: '600px' , 
      data: {
        projeto: this.projeto,
        tipo: tipoArea
      }});
  }
  
  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let userId = params['id'];
      console.log('Id: ' , userId);
      this.projetoService.findById(userId)
        .subscribe((valor : Projeto) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.projeto = valor;
          this.carregaParceiro();
        })
    });
    
  }

  carregaParceiro() {
    this.projetoService.getProjetoCanvasRel(this.projeto.id)
    .subscribe((valor : ProjetoCanvas[]) => {
      console.log('Lista: ' + JSON.stringify(valor));
      this.parceiros = valor;
    })

    /*
    this.projetoCanvasService.find({where: {idProjeto: this.projeto.id}})
      .subscribe((valor : ProjetoCanvas[]) => {
        console.log('Lista: ' + JSON.stringify(valor));
        this.parceiros = valor;
      })
      */
  }
 

}
