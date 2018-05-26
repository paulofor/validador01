import { Component, OnInit } from '@angular/core';

import { ProjetoMySql, MvpCanvasMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services/custom/ProjetoMySql';
import { MvpCanvasMySqlApi } from '../shared/sdk/services/custom/MvpCanvasMySql';



import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { MvpCanvasEditaComponent } from '../mvp-canvas-edita/mvp-canvas-edita.component';
import { MvpCanvasCriaComponent } from '../mvp-canvas-cria/mvp-canvas-cria.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BASE_URL, API_VERSION } from '../constantes/base.url';
import { LoopBackConfig } from '../shared/sdk/';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-canvas-mvp',
  templateUrl: './canvas-mvp.component.html',
  styleUrls: ['./canvas-mvp.component.scss']
})
export class CanvasMvpComponent implements OnInit {

  itensCanvas: MvpCanvasMySql[];
  projeto: ProjetoMySql;
  errMess: string;

  personas: MvpCanvasMySql[];
  jornadas: MvpCanvasMySql[];
  visoes: MvpCanvasMySql[];
  funcionalidades: MvpCanvasMySql[];
  custos: MvpCanvasMySql[];
  resultados: MvpCanvasMySql[];
  metricas: MvpCanvasMySql[];



  constructor(private dialog: MatDialog, private projetoService: ProjetoMySqlApi,
    private canvasService: MvpCanvasMySqlApi,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('CanvasMvpComponent');
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    this.carregaDados();

  }

  openDialog(tipoArea) {
    console.log('Tipo:', tipoArea);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log(`Dialog result: ${result}`); 
      this.carregaDados();
    });
    this.dialog.open(MvpCanvasCriaComponent, {
      width: '600px',
      data: {
        projeto: this.projeto,
        tipo: tipoArea
      }
    });
  }

  editaItem(projetoCanvas) {
    console.log('ID Edicao: ' + JSON.stringify(projetoCanvas));
    this.dialog.open(MvpCanvasEditaComponent, {
      width: '600px',
      data: {
        projeto: this.projeto,
        edicao: projetoCanvas
      }
    });
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let userId = params['id'];
      console.log('IdProjeto: ', userId);
      this.projetoService.findById(userId)
        .subscribe((valor: ProjetoMySql) => {
          console.log('Projeto: ' + JSON.stringify(valor));
          this.projeto = valor;
          this.carregaCanvas();
        })
    });

  }

  carregaCanvas() {
    this.projetoService.getMvpCanvasMySqls(this.projeto.id)
      .subscribe((valor: MvpCanvasMySql[]) => {
        console.log('Lista: ' + JSON.stringify(valor));
        this.itensCanvas = valor;
        this.distribuiItensCanvas();
      })

  }


  distribuiItensCanvas() {
    this.personas = this.itensCanvas.filter(
      item => item.tipo === 'PERSONA');
    this.jornadas = this.itensCanvas.filter(
      item => item.tipo === 'JORNADA');
    this.visoes = this.itensCanvas.filter(
      item => item.tipo === 'VISAO_MVP');
    this.funcionalidades = this.itensCanvas.filter(
      item => item.tipo === 'FUNCIONALIDADE');
    this.resultados = this.itensCanvas.filter(
      item => item.tipo === 'RESULTADO');
    this.custos = this.itensCanvas.filter(
      item => item.tipo === 'CUSTO_CRONOGRAMA');
    this.metricas = this.itensCanvas.filter(
      item => item.tipo === 'METRICA');
  }


}
