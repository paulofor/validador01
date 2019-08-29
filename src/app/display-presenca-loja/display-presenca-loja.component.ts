import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, PresencaLoja, PresencaLojaApi } from '../shared/sdk';

@Component({
  selector: 'app-display-presenca-loja',
  templateUrl: './display-presenca-loja.component.html',
  styleUrls: ['./display-presenca-loja.component.scss']
})
export class DisplayPresencaLojaComponent implements OnInit {

  @Input() campanha: CampanhaAds;

  presenca: PresencaLoja;

  constructor(private srv: PresencaLojaApi) { }

  ngOnInit() {
    if (this.campanha.presencaLojaId!=0)
      this.carregaItem();
  }

  carregaItem() {
    this.srv.findById(this.campanha.presencaLojaId)
      .subscribe((result: PresencaLoja) => {
        this.presenca = result;
      })
  }

}
