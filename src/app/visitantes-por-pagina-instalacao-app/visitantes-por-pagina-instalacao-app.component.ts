import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaginaInstalacaoAppApi, PaginaInstalacaoApp, Visitante } from '../shared/sdk';

@Component({
  selector: 'app-visitantes-por-pagina-instalacao-app',
  templateUrl: './visitantes-por-pagina-instalacao-app.component.html',
  styleUrls: ['./visitantes-por-pagina-instalacao-app.component.scss']
})
export class VisitantesPorPaginaInstalacaoAppComponent implements OnInit {


  consulta = { 
    'include' : [
      {'relation': 'visitantes' , 'scope' : {'order' : 'dataHora desc'} },
      {'relation' : 'projeto' }
    ]
    };


  item : PaginaInstalacaoApp;


  constructor(private servico: PaginaInstalacaoAppApi, private router: ActivatedRoute) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.router.params.subscribe((param: Params) => {
      let id = param['id'];
      this.servico.findById(id, this.consulta)
        .subscribe((result: PaginaInstalacaoApp) => {
          //console.log('PaginaInstalacao: ' , result);
          this.item = result;
        })
    })
  }

  getAtivoClasse(item: Visitante) {
    if (
      item.codigoCookie == 'b89e242e16b55de092016b2272600f4164dc9e78' 
      || item.codigoCookie == '1fa33fcbdd83d61dc6925c6a1bc4a97ac9855036' 
      ) {
      return 'colunaInativo'
    } else {
      return 'colunaAtivo'
    }
  }

}
