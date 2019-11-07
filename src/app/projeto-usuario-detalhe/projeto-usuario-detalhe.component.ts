import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsuarioProduto, UsuarioProdutoApi } from '../shared/sdk';
import { Params } from '@angular/router';

@Component({
  selector: 'app-projeto-usuario-detalhe',
  templateUrl: './projeto-usuario-detalhe.component.html',
  styleUrls: ['./projeto-usuario-detalhe.component.scss']
})
export class ProjetoUsuarioDetalheComponent implements OnInit {

  private listaUsuario:UsuarioProduto[];

  constructor(private route: ActivatedRoute, private usuarioSrv:UsuarioProdutoApi) { }

  ngOnInit() {
    this.carregaUsuario();
  }

  carregaUsuario() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.usuarioSrv.find( {"where" : {"projetoMySqlId" : id }} )
        .subscribe((result:UsuarioProduto[]) => {
          this.listaUsuario = result;
        }
      )
    })
  }

}
