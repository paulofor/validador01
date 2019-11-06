import { Component, OnInit } from '@angular/core';
import { ProjetoMySql } from '../shared/sdk';
import { ProjetoMySqlApi } from '../shared/sdk/services';

@Component({
  selector: 'app-projeto-usuario',
  templateUrl: './projeto-usuario.component.html',
  styleUrls: ['./projeto-usuario.component.scss']
})
export class ProjetoUsuarioComponent implements OnInit {

  projetos: ProjetoMySql[];

  constructor(private projetoService: ProjetoMySqlApi) { }

  ngOnInit() {
    this.projetoService.find()
      .subscribe((projetos: ProjetoMySql[]) => 
        this.projetos = projetos
       );
  }

}
