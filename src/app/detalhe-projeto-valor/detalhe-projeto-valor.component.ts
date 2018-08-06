import { Component, OnInit } from '@angular/core';
import { ProjetoCanvasMySql, ProjetoCanvasMySqlApi, ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalhe-projeto-valor',
  templateUrl: './detalhe-projeto-valor.component.html',
  styleUrls: ['./detalhe-projeto-valor.component.scss']
})
export class DetalheProjetoValorComponent implements OnInit {

  projeto$: Observable<ProjetoMySql>;
  consulta = { "include" : { "relation" : "projetoCanvasMySqls" , "scope" : {"include" : "itemValidacaoPaginas" , "where" : {"tipo" : "VALOR"} } } };

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi) { }

  ngOnInit() {
    this.projeto$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srv.findById(params.get('id'), this.consulta))
    );
  }



}
