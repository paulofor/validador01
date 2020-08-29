import { Component, OnInit } from '@angular/core';
import { VisitaApp, VisitaAppApi } from '../shared/sdk';

@Component({
  selector: 'app-visita-app',
  templateUrl: './visita-app.component.html',
  styleUrls: ['./visita-app.component.scss']
})
export class VisitaAppComponent implements OnInit {

  lista: VisitaApp[];

  constructor(private srv: VisitaAppApi) { }

  ngOnInit() {
    this.carregaVisitas();
  }

  carregaVisitas() {
    const filtro = { 
      'order' : 'dataHora desc' , 
      'limit' : 30, 
      'include' : [
        {'relation':'telaApp'},
        {'relation':'usuarioProduto' , 'scope' : {'include' : 'dispositivoUsuarios'} }
      ]
    };
    this.srv.find(filtro)
      .subscribe((resultado: VisitaApp[]) => {
        this.lista = resultado;
        console.log('Lista:' , this.lista);
      })

  }

}
