import { Component, OnInit } from '@angular/core';
import { VersaoApp, VersaoAppApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista-dispositivo-por-versao',
  templateUrl: './lista-dispositivo-por-versao.component.html',
  styleUrls: ['./lista-dispositivo-por-versao.component.scss']
})
export class ListaDispositivoPorVersaoComponent implements OnInit {

  versao: VersaoApp;


  constructor(private route: ActivatedRoute,private srv: VersaoAppApi) { }

  ngOnInit() {
    this.carregaVersao();
  }

  carregaVersao() {
    this.route.params.subscribe((params: Params) => {
      let idVersao = params['id'];
      console.log('ID: ' , idVersao);
      this.srv.findById(idVersao, {'include' : 'dispositivoUsuarios'})
        .subscribe((resultado:VersaoApp) => {
          console.log('ListaDispositivoPorVersaoComponent:' , resultado);
          this.versao = resultado;
        })
    })
  }

}
