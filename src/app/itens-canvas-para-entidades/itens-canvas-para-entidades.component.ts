import { Component, OnInit, Input } from '@angular/core';
import { Aplicacao } from '../shared/sdk';

@Component({
  selector: 'app-itens-canvas-para-entidades',
  templateUrl: './itens-canvas-para-entidades.component.html',
  styleUrls: ['./itens-canvas-para-entidades.component.scss']
})
export class ItensCanvasParaEntidadesComponent implements OnInit {

  @Input() aplicacao: Aplicacao;

  constructor() { }

  ngOnInit() {
  }

}
