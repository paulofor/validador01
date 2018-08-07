import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-pagina-validacao-por-projeto',
  templateUrl: './lista-pagina-validacao-por-projeto.component.html',
  styleUrls: ['./lista-pagina-validacao-por-projeto.component.scss']
})
export class ListaPaginaValidacaoPorProjetoComponent implements OnInit {

  projeto$: Observable<ProjetoMySql>;
  consulta = { "include" : 
              { "relation" : "projetoCanvasMySqls" , 
                "scope" : 
                  { "include" : "itemValidacaoPaginas" , 
                    "where" : {"tipo" : "VALOR"} 
                  } 
                } 
              };


  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi) { }

  ngOnInit() {
    this.projeto$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srv.findById(params.get('id'), this.consulta))
    );
  }

}
