import { Component, OnInit, Input } from '@angular/core';
import { Aplicacao, MvpCanvasMySql, GanhoDorCanvasMySql, ProjetoCanvas, ProjetoMySqlApi } from '../shared/sdk';


@Component({
  selector: 'app-itens-canvas-para-entidades',
  templateUrl: './itens-canvas-para-entidades.component.html',
  styleUrls: ['./itens-canvas-para-entidades.component.scss']
})
export class ItensCanvasParaEntidadesComponent implements OnInit {

  listaProjetoCanvas: ProjetoCanvas[];
  listaGanhoDorCanvas: GanhoDorCanvasMySql[];
  listaMvpCanvas: MvpCanvasMySql[];

  @Input() aplicacao: Aplicacao;


  constructor(private servico:ProjetoMySqlApi) { }

  ngOnInit() {
    this.carregaItemCanvas();
  }

  carregaItemCanvas() {
    this.servico.ItensAjudaEntidade(this.aplicacao.projetoMySqlId)
      .subscribe((resultado) => {
        this.listaMvpCanvas = resultado.listaMvpCanvas;
        this.listaGanhoDorCanvas = resultado.listaGanhoDorCanvas;
        this.listaProjetoCanvas = resultado.listaProjetoCanvas;
        console.log("Lista1:" , this.listaMvpCanvas);
      })
  }

}
