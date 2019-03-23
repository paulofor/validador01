import { Component, OnInit, Input } from '@angular/core';
import { PaletaCor } from '../shared/sdk';

@Component({
  selector: 'app-display-paleta-cor',
  templateUrl: './display-paleta-cor.component.html',
  styleUrls: ['./display-paleta-cor.component.scss']
})
export class DisplayPaletaCorComponent implements OnInit {

  @Input() paletaCor: PaletaCor;


  constructor() { }

  ngOnInit() {
  }

}
