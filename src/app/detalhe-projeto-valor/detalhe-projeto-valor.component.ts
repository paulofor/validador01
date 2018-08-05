import { Component, OnInit } from '@angular/core';
import { ProjetoCanvasMySql, ProjetoCanvasMySqlApi, ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe-projeto-valor',
  templateUrl: './detalhe-projeto-valor.component.html',
  styleUrls: ['./detalhe-projeto-valor.component.scss']
})
export class DetalheProjetoValorComponent implements OnInit {

  projeto: ProjetoMySql;

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi) { }

  ngOnInit() {
    //this.carregaProjeto();
  }

  //this.srv..find(id,{"include":{"relation":"projetoCanvasMySqls", "scope": {"where":{"tipo":"VALOR"}}}})
 
  /*
  carregaProjeto() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('ProjetoId: ', id);
  
      this.srv.findByIdProjetoCanvasMySqls(id)
        .subscribe((valor: ProjetoMySql) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.projeto = valor;
        })
    });
  }
  */

}
