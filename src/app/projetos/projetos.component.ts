import { Component, OnInit } from '@angular/core';



import { ProjetoMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services/custom/ProjetoMySql';

import { Router } from '@angular/router';



@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})

export class ProjetosComponent implements OnInit {

  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi,
              private router: Router) { 

  }

  ngOnInit() {
    this.projetoService.find()
      .subscribe((projetos: ProjetoMySql[]) => 
        this.projetos = projetos
       );
    
  }

  goCanvas(id: number){        
    this.router.navigate(['projetoCanvas/' + id]);
  }


}
