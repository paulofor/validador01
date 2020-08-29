import { Component, OnInit } from '@angular/core';
import { ErroLogicoLogApi, ErroLogicoLog } from '../shared/sdk';

@Component({
  selector: 'app-erro-logico-log',
  templateUrl: './erro-logico-log.component.html',
  styleUrls: ['./erro-logico-log.component.scss']
})
export class ErroLogicoLogComponent implements OnInit {


  lista: ErroLogicoLog[];

  constructor(private srv:ErroLogicoLogApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.find({'order' : 'dataHora desc' , 'limit' : 50 })
      .subscribe((result:ErroLogicoLog[]) => {
          this.lista = result;
          console.log('Resultado-Lista:' , this.lista);
      })
  }

}
