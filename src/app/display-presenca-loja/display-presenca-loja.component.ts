import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, PresencaLoja, PresencaLojaApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display-presenca-loja',
  templateUrl: './display-presenca-loja.component.html',
  styleUrls: ['./display-presenca-loja.component.scss']
})
export class DisplayPresencaLojaComponent implements OnInit {

  @Input() campanha: CampanhaAds;
  @Input() id: number;

  presenca: PresencaLoja;

  constructor(private srv: PresencaLojaApi, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.campanha && this.campanha.presencaLojaId != 0) {
      this.carregaItem(this.campanha.presencaLojaId);
    } else {
      if (this.id && this.id != 0) {
        this.carregaItem(this.id);
      } else {
        this.route.params.subscribe((params: Params) => {
          let id = params['id'];
          if (id) {
            this.carregaItem(id);
          }
        })
      }
    }
  }

  carregaItem(idPresenca: number) {
    this.srv.findById(idPresenca)
      .subscribe((result: PresencaLoja) => {
        this.presenca = result;
      })
  }

}
