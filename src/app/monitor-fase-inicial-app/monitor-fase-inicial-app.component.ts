import { Component, OnInit } from '@angular/core';
import { MonitorFaseInicialApp, MonitorFaseInicialAppApi } from '../shared/sdk';

@Component({
  selector: 'app-monitor-fase-inicial-app',
  templateUrl: './monitor-fase-inicial-app.component.html',
  styleUrls: ['./monitor-fase-inicial-app.component.scss']
})
export class MonitorFaseInicialAppComponent implements OnInit {

  lista: MonitorFaseInicialApp[];

  constructor(private srv:MonitorFaseInicialAppApi) { }

  ngOnInit() {
    this.carrega();
  }

  carrega() {
    this.srv.find({'order' : 'dataHora desc' , 'limit' : 50 })
      .subscribe((result:MonitorFaseInicialApp[]) => {
          this.lista = result;
          console.log('Resultado-Lista:' , this.lista);
      })
  }


}
