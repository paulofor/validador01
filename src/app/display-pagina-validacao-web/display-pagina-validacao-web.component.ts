import { Component, OnInit, Input } from '@angular/core';
import { PaginaValidacaoWeb } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaPaginaValidacaoWebComponent } from '../edita-pagina-validacao-web/edita-pagina-validacao-web.component';

@Component({
  selector: 'app-display-pagina-validacao-web',
  templateUrl: './display-pagina-validacao-web.component.html',
  styleUrls: ['./display-pagina-validacao-web.component.scss']
})
export class DisplayPaginaValidacaoWebComponent implements OnInit {

  @Input() item: PaginaValidacaoWeb;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    console.log('Pagina:' , JSON.stringify(this.item));
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
    });
    this.dialog.open(EditaPaginaValidacaoWebComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

  visitar(){
    //window.open("http://www.digicom.inf.br/oferta/?id=" + this.item.codigoHash , "_blank");
    window.open("https://www.digicom.inf.br:21101/?id=" + this.item.codigoHash , "_blank");
  }
  mobile(){
    //window.open("http://www.digicom.inf.br/oferta/?id=" + this.item.codigoHash , "_blank");
    window.open("https://www.digicom.inf.br:21101/?id=" + this.item.codigoHash , "_blank");
  }

  permiteAlterar(item : PaginaValidacaoWeb) {
    
    return (item.permiteEdicao==1);
  }

}
