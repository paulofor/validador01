import { Component, OnInit } from '@angular/core';
import { PaginaValidacaoWeb, PaginaValidacaoWebApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-visitantes-por-pagina-validacao-web',
  templateUrl: './visitantes-por-pagina-validacao-web.component.html',
  styleUrls: ['./visitantes-por-pagina-validacao-web.component.scss']
})
export class VisitantesPorPaginaValidacaoWebComponent implements OnInit {



  consulta = { 
    'include' : [
      {'relation': 'visitantes' , 'scope' : {'order' : 'dataHora desc'} },
      {'relation' : 'projeto' }
    ]
    };


  item : PaginaValidacaoWeb;


  constructor(private servico: PaginaValidacaoWebApi, private router: ActivatedRoute) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.router.params.subscribe((param: Params) => {
      let id = param['id'];
      this.servico.findById(id, this.consulta)
        .subscribe((result: PaginaValidacaoWeb) => {
          //console.log('PaginaInstalacao: ' , result);
          this.item = result;
        })
    })
  }

}
