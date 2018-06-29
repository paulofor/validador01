import { Component, OnInit } from '@angular/core';
import { ProjetoCanvasMySql, ProjetoCanvasMySqlApi } from '../shared/sdk/index';

@Component({
  selector: 'app-proposta-valor',
  templateUrl: './proposta-valor.component.html',
  styleUrls: ['./proposta-valor.component.scss']
})
export class PropostaValorComponent implements OnInit {

  valores: ProjetoCanvasMySql[];
  errMess: string;


  constructor(private projetoCanvasService: ProjetoCanvasMySqlApi) { }

  ngOnInit() {
    this.projetoCanvasService.find({where: {tipo: 'VALOR'}})
    .subscribe((valores: ProjetoCanvasMySql[]) => 
      this.valores = valores
     );
  }

}
