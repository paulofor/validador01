import { Component, OnInit } from '@angular/core';

import { ProjetoService } from '../servicos/projeto.service';

import { LoopBackConfig } from '../shared/sdk/';
import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';





@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})

export class ProjetosComponent implements OnInit {

  projetos: Projeto[];
  errMess: string;

  constructor(private projetoService: ProjetoApi) { }

  ngOnInit() {
    this.projetoService.find()
      .subscribe((projetos: Projeto[]) => this.projetos = projetos,
        errmess => this.errMess = <any>errmess);
  }

}
