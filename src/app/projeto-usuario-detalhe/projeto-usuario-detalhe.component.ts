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

  listaUsuario:UsuarioProduto[];

  constructor(private route: ActivatedRoute, private usuarioSrv:UsuarioProdutoApi) { }

  ngOnInit() {
    this.carregaUsuario();
  }

  getQtdeToken() {
    let saida = 0;
    this.listaUsuario.forEach(usuario => {
      if (usuario.dispositivoUsuarios.length>0 && usuario.dispositivoUsuarios[0].tokenFcm) {
        saida++;
      }
    });
    return saida;
  }

  getToken(usuario: UsuarioProduto) {
    if (usuario.dispositivoUsuarios.length>0 && usuario.dispositivoUsuarios[0].tokenFcm) {
      return usuario.dispositivoUsuarios[0].tokenFcm.substring(0,10);
    } else {
      return "-";
    }
  }

  getModelo(usuario: UsuarioProduto) {
    if (usuario.dispositivoUsuarios.length>0 && usuario.dispositivoUsuarios[0].tokenFcm) {
      return usuario.dispositivoUsuarios[0].codigoDispositivo;
    } else {
      return "-";
    }
  }

  getVersao(usuario: UsuarioProduto) {
    if (usuario.dispositivoUsuarios.length>0 && usuario.dispositivoUsuarios[0].tokenFcm) {
      return usuario.dispositivoUsuarios[0].versaoSo;
    } else {
      return "-";
    }
  }

  getUuid(usuario: UsuarioProduto) {
    if (usuario.dispositivoUsuarios.length>0 && usuario.dispositivoUsuarios[0].tokenFcm) {
      return usuario.dispositivoUsuarios[0].uuid;
    } else {
      return "-";
    }
  }

  getIdCampanha(usuario : UsuarioProduto) {
    if (usuario.dispositivoUsuarios.length>0 && usuario.dispositivoUsuarios[0].tokenFcm) {
      return usuario.dispositivoUsuarios[0].campanhaAdsId;
    } else {
      return "-";
    }
  }

  getIdVersaoApp(usuario : UsuarioProduto) {
    if (usuario.dispositivoUsuarios.length>0 && usuario.dispositivoUsuarios[0].tokenFcm) {
      return usuario.dispositivoUsuarios[0].versaoAppId;
    } else {
      return "-";
    }
  }

  getUltNotificacao(usuario : UsuarioProduto) {
    if (usuario.notificacaoApps.length>0 && usuario.notificacaoApps[0].resultadoEnvio) {
      return usuario.notificacaoApps[0].resultadoEnvio;
    } else {
      return "-";
    }
  }

  getDataUltNotificacao(usuario : UsuarioProduto) {
    if (usuario.notificacaoApps.length>0 && usuario.notificacaoApps[0].dataHoraCriacao) {
      return usuario.notificacaoApps[0].dataHoraCriacao;
    } else {
      return "";
    }
  }
  carregaUsuario() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.usuarioSrv.find( 
            {
              "where" : {"projetoMySqlId" : id },
              "order": "dataHoraCriacao DESC",
              "include" : ["dispositivoUsuarios",{"relation" : "notificacaoApps" , "scope" : {"order" : "dataHoraCriacao desc" , "limit" : "1" } }] 
            } )
        .subscribe((result:UsuarioProduto[]) => {
          console.log('ListaUsuario: ' , result);
          this.listaUsuario = result;
        }
      )
    })
  }

}
