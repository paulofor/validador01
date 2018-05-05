import { Injectable } from '@angular/core';

import { Projeto } from '../model/projeto';
import { Observable } from 'rxjs/Observable';
import { PROJETOS } from '../servicos/auxiliar/projeto-exemplo';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class ProjetoService {



  constructor() { }

  
  getPratos(): Observable<Projeto[]> {
    return Observable.of(PROJETOS).delay(2000);
    
  }

  getPrato(id: number) : Observable<Projeto> {
    return Observable.of(PROJETOS.filter((projeto) => (projeto.id===id))[0]).delay(2000);
  }


}
