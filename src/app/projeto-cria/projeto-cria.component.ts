import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from   '../model/projeto';
import { ProjetoService } from '../servicos/projeto.service';

@Component({
  selector: 'app-projeto-cria',
  templateUrl: './projeto-cria.component.html',
  styleUrls: ['./projeto-cria.component.scss']
})
export class ProjetoCriaComponent implements OnInit {

 
  model = new Projeto(0, '', '', '','');

  constructor(private servico: ProjetoService) { }

  ngOnInit() {
    
  }


  onSubmit() {
    console.log("Projeto: ", this.model);
  }

}
