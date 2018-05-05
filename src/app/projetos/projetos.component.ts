import { Component, OnInit } from '@angular/core';

import { ProjetoService } from '../servicos/projeto.service';
import { Projeto } from '../model/projeto';




@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})

export class ProjetosComponent implements OnInit {

  projetos: Projeto[];

  constructor(private projetoService: ProjetoService) { }

  ngOnInit() {
    this.projetoService.getPratos()
      .subscribe(projetos => this.projetos = projetos);
  }

}
