import { Component, OnInit } from '@angular/core';

import { ProjetoService } from '../servicos/projeto.service';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';

import { Router } from '@angular/router';



@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})

export class ProjetosComponent implements OnInit {

  projetos: Projeto[];
  errMess: string;

  constructor(private projetoService: ProjetoApi,
              private router: Router) { 

  }

  ngOnInit() {
    this.projetoService.find()
      .subscribe((projetos: Projeto[]) => 
        this.projetos = projetos
       );
    
  }

  goCanvas(id: number){        
    this.router.navigate(['projetoCanvas']);
  }

}
