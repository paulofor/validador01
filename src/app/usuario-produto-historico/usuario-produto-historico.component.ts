import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuarioProduto, UsuarioProdutoApi } from '../shared/sdk';

@Component({
  selector: 'app-usuario-produto-historico',
  templateUrl: './usuario-produto-historico.component.html',
  styleUrls: ['./usuario-produto-historico.component.scss']
})
export class UsuarioProdutoHistoricoComponent implements OnInit {

  usuario : UsuarioProduto;

  constructor(private srv:UsuarioProdutoApi, private route:ActivatedRoute) { }

  ngOnInit() {
    this.carregaUsuario();
  }

  carregaUsuario() {
    this.route.params.subscribe((params:Params) => {
      let id = params['id'];
      let filtro = {
          'include' : {'relation' : 'visitaApps' , 'order' : 'dataHora' , 'scope' : {'include' : 'telaApp'}}
      };
      this.srv.findById(id, filtro)
        .subscribe((result:UsuarioProduto) => {
          this.usuario = result;
          console.log('usuario:' , this.usuario);
        })
    })
  }
}
