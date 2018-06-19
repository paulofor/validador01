import { Component, OnInit } from '@angular/core';

import { ProjetoMySql, GanhoDorCanvasMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi, GanhoDorCanvasMySqlApi } from '../shared/sdk/services/custom';


import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { DorGanhoCanvasEditaComponent } from '../dor-ganho-canvas-edita/dor-ganho-canvas-edita.component';
import { DorGanhoCanvasCriaComponent } from '../dor-ganho-canvas-cria/dor-ganho-canvas-cria.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BASE_URL, API_VERSION } from '../constantes/base.url';
import { LoopBackConfig } from '../shared/sdk/';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-canvas-dor-ganho',
  templateUrl: './canvas-dor-ganho.component.html',
  styleUrls: ['./canvas-dor-ganho.component.scss']
})
export class CanvasDorGanhoComponent implements OnInit {


  itensCanvas: GanhoDorCanvasMySql[];
  projeto: ProjetoMySql;
  errMess: string;

  personas: GanhoDorCanvasMySql[];
  jornadas: GanhoDorCanvasMySql[];
  visoes: GanhoDorCanvasMySql[];
  funcionalidades: GanhoDorCanvasMySql[];
  custos: GanhoDorCanvasMySql[];
  resultados: GanhoDorCanvasMySql[];
  metricas: GanhoDorCanvasMySql[];

  constructor(private dialog: MatDialog, private projetoService: ProjetoMySqlApi,
    private canvasService: GanhoDorCanvasMySqlApi,
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
    this.dialog.open(DorGanhoCanvasCriaComponent, {
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
