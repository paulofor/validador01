import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projeto-cria',
  templateUrl: './projeto-cria.component.html',
  styleUrls: ['./projeto-cria.component.scss']
})
export class ProjetoCriaComponent implements OnInit {

  @Input() projeto = {  
    nomeProjeto: '' ,
    mercadoProjeto: '',
    valorProjeto: '',
    dorProjeto: ''
  }

  constructor() { }

  ngOnInit() {
    
  }


  onSubmit() {
    console.log("Projeto: ", this.projeto);
  }

}
