import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-resultado',
  templateUrl: './projeto-resultado.component.html',
  styleUrls: ['./projeto-resultado.component.scss']
})
export class ProjetoResultadoComponent implements OnInit {

  lista : ProjetoMySql[];

  constructor(private srv:ProjetoMySqlApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    let filtro = {
      'order' : 'custoCampanha desc'
    }
    this.srv.find(filtro)
      .subscribe((result:ProjetoMySql[]) => {
        console.log('result:' , result);
        this.lista = result;
      })
  }

}
