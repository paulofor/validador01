import { Component, OnInit, Input } from '@angular/core';

import { ProjetoService } from '../servicos/projeto.service';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';

@Component({
  selector: 'app-projeto-cria',
  templateUrl: './projeto-cria.component.html',
  styleUrls: ['./projeto-cria.component.scss']
})
export class ProjetoCriaComponent implements OnInit {

  model = new Projeto();

  constructor(private servico: ProjetoApi) { }

  ngOnInit() {

  }


  onSubmit() {
    console.log("Projeto: ", this.model);
    this.servico
      .create(this.model, (err,obj) => {
      console.log("Erro:" + err.message);
      }).subscribe((e:any)  => console.log(JSON.stringify(e)));
    
  }

}
