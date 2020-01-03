import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-metrica-produto',
  templateUrl: './projeto-metrica-produto.component.html',
  styleUrls: ['./projeto-metrica-produto.component.scss']
})
export class ProjetoMetricaProdutoComponent implements OnInit {

  projetos : ProjetoMySql[]

  constructor(private srv: ProjetoMySqlApi) { }

  ngOnInit() {
    this.carregaProjeto();
  }

  carregaProjeto() {
    this.srv.find()
      .subscribe((result: ProjetoMySql[]) => {
        this.projetos = result;
      })
  }

}
