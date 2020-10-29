import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuarioProduto, UsuarioProdutoApi } from '../shared/sdk';

@Component({
  selector: 'app-usuario-historico',
  templateUrl: './usuario-historico.component.html',
  styleUrls: ['./usuario-historico.component.scss']
})
export class UsuarioHistoricoComponent implements OnInit {

  item: UsuarioProduto;

  constructor(private router:ActivatedRoute, private srv:UsuarioProdutoApi) { }

  ngOnInit() {
    this.router.params.subscribe((params:Params) => {
      let id = params['id'];
      let filtro = {
          'include' : {'relation' : 'visitaApps'}
      };
      this.srv.findById(id, filtro) 
        .subscribe((result : UsuarioProduto) => {
          console.log('result' , result);
          this.item = result;
        })
    })
  }

}
